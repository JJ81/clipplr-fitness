/**
 * Created by yijaejun on 2016. 3. 7..
 */
Router.configure({
    layoutTemplate: 'layout'
});


Router.route('/', function () {
    this.render('todo', {
        data: function () {
            return null;
        }
    });
});

/**
 * TODO 로그인 필요할 경우 페이지 이동 없이 바로 로그인 모달창이 뜬다.
 */


/**
 * 랜딩 페이지
 * 클립 불러오기
 *
 * offset : 시작지점
 * size : 크기
 */
Router.route('/list/:_size/:_offset', function () {
    var size = parseInt(this.params._size);
    var offset = parseInt(this.params._offset);

    this.render('list', {
        data : function (){
            return {
                list : Tasks.find({},{sort:{createdAt:-1}, skip: offset, limit: size})
            }
        }
    });
});


/**
 * 클립보기
 * TODO 1. 로그인을 하고 해당 콘텐츠의 소유자일 경우 수정하기 버튼이 노출된다.
 */
Router.route('/content/:_id', function () {
    var id = this.params._id;

    this.render('content', {
        data: function () {
            return {
                content : Tasks.find({_id : id})
            };
        }
    });
});



/**
 * 클립 쓰기
 * TODO 1. 로그인을 해야 클립쓰기에 접근할 수 있다.
 */
Router.route('/editor', function () {
    if (!Meteor.userId()) {
        this.redirect('/login');
    }else{
        this.render('editor');
    }
});

/**
 * 클립 수정하기
 * TODO 1.로그인을 했을 경우에만 수정이 가능하도록 하며,
 * TODO 2.로그인을 하지 않은 상태로 URL에 접속을 하려고 했을 때 list페이지로 리다이렉트 시킨다
 */
Router.route('/editor/:_id/modify', function () {
    this.render('editor', {
        data: function () {
            return null;
        }
    });
});

/**
 * 클립 지우기
 * TODO 1.로그인을 하지 않으면 접속할 수 없다
 */
Router.route('/editor/:_id/delete', function () {
    this.render('editor', {
        data: function () {
            return null;
        }
    });
});

/**
 * login
 * TODO 로그인이 된 후에는 어디서 로그인을 했는지 확인하고 해당 경로로 다시 보내야(redirect) 한다.
 * TODO 세션에 저장하여 확인하는가?
 */
Router.route('/login', function () {
    if(Meteor.userId){

    }
    this.render('login');

});