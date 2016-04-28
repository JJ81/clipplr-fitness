/**
 * Created by yijaejun on 2016. 4. 21..
 */

Meteor.subscribe('uploads');

Template.admin_exercise_register.helpers({
    theUploads: function () {
        return Uploads.find({}, {sort: {"name": 1}});
    },
    myCallbacks: function () {
        return {
            finished: function (index, fileInfo, context) {
                // This function will execute after each fileupload is finished on the client'
                console.log("index : " + index);
                console.log("fileInfo : " + fileInfo);
                console.log("context : " + context);
            }
        }
    },
    someStuff: function () {
        // this is data that will be passed to the server with the upload
        return {someData: "hello", otherData: "goodbye"}
    }
});

Template.admin_exercise_register.events({
    'click #deleteFileButton ': function (event) {
        Meteor.call('deleteFile', this._id);
    }
});