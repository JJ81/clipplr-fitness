/**
 * Created by yijaejun on 2016. 3. 7..
 */
Router.configure({
    path: 'templates',
    layoutTemplate: 'layout'
});

/**
 * 랜딩 페이지
 * 클립 불러오기
 * TODO todo앱을 클립 불러오는 앱으로 변경해보자
 * offset : 시작지점
 * size : 크기
 */
Router.route('/clipplr/:offset/:size/list/', function () {
    this.render('todo', {
        data: function () {
            return null;
        }
    });
});

/**
 * 클립 쓰기
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
 */
Router.route('/editor/:id/modify', function () {
    this.render('editor', {
        data: function () {
            return null;
        }
    });
});

/**
 * 클립 지우기
 */
Router.route('/editor/:id/delete', function () {
    this.render('editor', {
        data: function () {
            return null;
        }
    });
});

