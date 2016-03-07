/**
 * Created by yijaejun on 2016. 3. 7..
 */

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

    Meteor.publish("tasks", function () {
        return Tasks.find();
    });
}
