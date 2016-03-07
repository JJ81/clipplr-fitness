Tasks = new Mongo.Collection('tasks');

// private method related DB is called from client-side code like shown below.
Meteor.methods({
    addTask: function (text) {
        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        Tasks.insert({
            text: text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    deleteTask: function (taskId) {
        Tasks.remove(taskId);
    },
    setChecked: function (taskId, setChecked) {
        Tasks.update(taskId, { $set: { checked: setChecked} });
    },
    setPrivate: function (taskId, setToPrivate) {
        var task = Tasks.findOne(taskId);

        // Make sure only the task owner can make a task private
        if (task.owner !== Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        Tasks.update(taskId, { $set: { private: setToPrivate } });
    }
});

if (Meteor.isClient) {

    Meteor.subscribe("tasks");

    Template.todo.helpers({
        tasks: function () {
            if (Session.get("hideCompleted")) {
                // If hide completed is checked, filter tasks
                // $ne : not equal to
                return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
            } else {
                // Otherwise, return all of the tasks
                return Tasks.find({}, {sort: {createdAt: -1}});
            }
        },
        hideCompleted: function () {
            return Session.get("hideCompleted");
        },
        incompleteCount: function () {
            return Tasks.find({checked: {$ne: true}}).count();
        },
        isOwner: function () {
            return this.owner === Meteor.userId();
        }
    });

    // body는 무엇을 의미하는가?
    // todo에 바인딩이 되지 않는 이유는 무엇인가?
    Template.body.events({
        'submit .new-task': function (event) {
            event.preventDefault();
            var text = event.target.text.value;
            Meteor.call("addTask", text);
            event.target.text.value = "";
        },

        'change .hide-completed input': function (event) {
            Session.set("hideCompleted", event.target.checked);
        },

        'click .toggle-checked': function () {
            Meteor.call("setChecked", this._id, !this.checked);
        },
        'click .delete': function () {
            Meteor.call("deleteTask", this._id);
        },
        "click .toggle-private": function () {
            Meteor.call("setPrivate", this._id, ! this.private);
        }

    });

    Meteor.startup(function () {
       $('.new-task input[name=text]').focus();
    });

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });

}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

    Meteor.publish("tasks", function () {
        return Tasks.find();
    });
}