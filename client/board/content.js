/**
 * Created by yijaejun on 3/17/16.
 */
if(Meteor.isClient){
    Meteor.subscribe('clips');
    /**
     * 로그인 여부를 확인하여 수정 권한이 있는지 확인한다.
     */
    Template.content.helpers({
        isLogin: function(createor) {
            return (Meteor.userId() === createor);
        }
    });
}