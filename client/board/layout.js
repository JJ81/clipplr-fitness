/**
 * Created by yijaejun on 3/17/16.
 */
if(Meteor.isClient){

    Template.layout.helpers({
        // 로그인 여부 판단
        isLogin: function () {
            if(!Meteor.userId())
                return false;
            return true;
        },
        /**
         * 현재 페이지와 일치하면 false
         * @param current
         * @returns {boolean}
         */
        comparePage: function (current) {
            // console.log(Iron.Location.get().path);
            return !(Iron.Location.get().path.indexOf(current) !== -1 );
        }
    });

    Template.layout.events({
        'click .backBtn': function () {
            window.history.back(-1);
        },

        'click .writeBtn': function () {
            if(Session.get('editor_data'))
                delete Session.keys.editor_data;
            //Meteor.call('removeSessionForEditor', 'editor_data');
        },

        'click .closeLeftMenu': function () {
            $('.leftMenu').hide(100);
            $('.bg_layer').hide(100);
        },

        'click .homeBtn': function () {
            $('.leftMenu').show(100);
            $('.bg_layer').show(100);
        }
    });
}