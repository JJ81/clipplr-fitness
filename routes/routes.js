/**
 * Created by yijaejun on 2016. 3. 7..
 */
Router.configure({
    path: 'templates',
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('todo', {
        data: function () {
            return null;
        }
    });
});
