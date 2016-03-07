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
 * 랜딩 페이지
 * 클립 불러오기
 * TODO todo앱을 클립 불러오는 앱으로 변경해보자
 * offset : 시작지점
 * size : 크기
 */
Router.route('/list/:_size/:_offset', function () {
    this.render('list', {
        data: function () {
            return null;
        }
    });
});

/**
 * 클립보기
 * TODO 1. 로그인을 하고 해당 콘텐츠의 소유자일 경우 수정하기 버튼이 노출된다.
 */
Router.route('/content/:_id', function () {
    this.render('content', {
        data: function () {
            return null;
        }
    });
});

/**
 * 클립 쓰기
 * TODO 1. 로그인을 해야 클립쓰기에 접근할 수 있다.
 */
Router.route('/editor', function () {
    this.render('editor', {
        data: function () {
            return null;
        }
    });
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

