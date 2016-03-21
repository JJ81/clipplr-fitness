/**
 * Created by yijaejun on 3/17/16.
 */
if(Meteor.isClient){
    /**
     * @ 로그인 설정 파트
     * TODO 1. account-ui-unstyle로 변경할 것
     * TODO 2. 각 계정을 id, secret키를 설정하는 방법을 알아볼 것
     * TODO 3. 이 코드는 이곳에 있는 것이 맞나? 공통으로 사용할 모듈을 외부로 빼야할 것이다
     * TODO 로그인 튜닝 -> https://wsvincent.com/meteor-custom-login-and-signup-form/
     */
    //Accounts.ui.config({
    //    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
    //});

    // it works like onload event
    //Template.login.rendered = function () {
    //    $('.login-link-text').trigger('click');
    //};
}
