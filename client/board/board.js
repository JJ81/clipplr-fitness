/**
 * Created by yijaejun on 2016. 3. 8..
 */
if(Meteor.isClient){
    Meteor.subscribe('clips');

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

    // it works like onload event
    Template.login.rendered = function () {
        console.log('test');
        $('.login-link-text').trigger('click');
    };

    /**
     * @ 로그인 설정 파트
     * TODO 1. account-ui-unstyle로 변경할 것
     * TODO 2. 각 계정을 id, secret키를 설정하는 방법을 알아볼 것
     * TODO 3. 이 코드는 이곳에 있는 것이 맞나? 공통으로 사용할 모듈을 외부로 빼야할 것이다
     */
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
    });


    /**
     * 로그인 여부를 확인하여 수정 권한이 있는지 확인한다.
     */
    Template.content.helpers({
        isLogin: function(createor) {
            return (Meteor.userId() === createor);
        }
    });
}