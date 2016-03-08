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
        }
    });

    Template.layout.events({
        // Go history back when content view
        // TODO 뒤로 가기 이벤트를 공통으로 사용할 수 있도록 하고 특정 페이지에서 필요할 때만 보일 수 있도록 한다?
        // 웹모바일이 먼저이기 때문에 상관없다.
        'click .history-back-btn': function () {
            window.history.back(-1);
        }
    });

    Template.editor.helpers({

    });

    Template.editor.events({

    });
}