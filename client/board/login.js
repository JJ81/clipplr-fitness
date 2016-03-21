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
     * TODO 이메일 인증
     */
    //Accounts.ui.config({
    //    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
    //});

    // it works like onload event
    //Template.login.rendered = function () {
    //    $('.login-link-text').trigger('click');
    //};

    //signup
    Template.signup.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.signupEmail.value;
            var passwordVar = event.target.signupPassword.value;
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            });
        }
    });

    //login
    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar);
        }
    });

    //logout
    Template.settings.events({
        'click .logout': function(event) {
            event.preventDefault();
            Meteor.logout();
        }
    })
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // 1. Set up stmp
        var username = 'clipplr-fitness';
        var password = 'zmfflqdlwhgdk!@#';
        var server = 'smtp.mailgun.org';
        var port = '25';

        process.env.MAIL_URL = 'smtp://' +
            encodeURIComponent(username) + ':' +
            encodeURIComponent(password) + '@' +
            encodeURIComponent(server) + ':' + port;

        // 2. Format the email
        //-- Set the from address
        Accounts.emailTemplates.from = 'test@test.com';

        //-- Application name
        Accounts.emailTemplates.siteName = 'clipplr-fitness';

        //-- Subject line of the email.
        Accounts.emailTemplates.verifyEmail.subject = function(user) {
            return 'Confirm Your Email Address for clipplr-fitness';
        };

        //-- Email text
        Accounts.emailTemplates.verifyEmail.text = function(user, url) {
            var newUrl = url.replace('/#','');
            return 'Thank you for registering.  Please click on the following link to verify your email address: \r\n' + newUrl;
        };
        //3.
        Accounts.onCreateUser(function(options, user) {
            user.profile = {};

            // we wait for Meteor to create the user before sending an email
            Meteor.setTimeout(function() {
                Accounts.sendVerificationEmail(user._id);
            }, 2 * 1000);

            return user;
        });
        //Accounts.config({
        //    sendVerificationEmail: true
        //});
    });
}
