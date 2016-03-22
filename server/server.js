/**
 * Created by yijaejun on 2016. 3. 7..
 */

if (Meteor.isServer) {

    Meteor.startup(function () {
        // code to run on server at startup
    });

    // 아래와 같이 작성하지 않으면 데이터를 가져오지 못한다.
    // server측에서 publish한 것을 subscribe한 것만 허용할 수 있다?
    //Meteor.publish("tasks", function() {
    //    return Tasks.find({}, {sort: {createdAt: -1}});
    //});

    Meteor.publish('clips', function (){
        return Boards.find({}, {sort: {createdAt: -1}});
    });

    Meteor.publish('admin_create_program', function (){
        return Programs.find({}, {sort: {createdAt: -1}});
    });

    // Editor에서 사용하는 메소드
    Meteor.methods ({
        webScrape: function(addr) {
            return Scrape.website(addr);
        },
        removeSessionForEditor: function (sessionName) {
            if(Session.get(sessionName))
                delete Session.keys.editor_data;
        }
    });






    //Meteor.Allow({
    //
    //});
    //
    //Meteor.Deny({
    //
    //});
}
