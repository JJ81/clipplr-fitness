/**
 * Created by yijaejun on 2016. 3. 7..
 */

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

    // 아래와 같이 작성하지 않으면 데이터를 가져오지 못한다.
    // server측에서 publish한 것을 subscribe한 것만 허용할 수 있다?
    Meteor.publish("tasks", function() {
        return Tasks.find({}, {sort: {createdAt: -1}});
    });

    Meteor.publish('clips', function (){
        return Boards.find({}, {sort: {createdAt: -1}});
    });



    //Meteor.Allow({
    //
    //});
    //
    //Meteor.Deny({
    //
    //});
}
