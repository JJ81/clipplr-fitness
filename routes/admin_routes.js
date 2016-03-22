/**
 * Created by yijaejun on 2016. 3. 21..
 */
// admin만 별도의 layout을 설정하려면??
//Router.configure({
//    layoutTemplate: 'admin_layout'
//});

Router.route('/admin/login', {
    data: function () {
        this.render('admin_login');
    }
});

Router.route('/admin/dashboard', {
    data: function () {
        this.render('admin_dashboard');
    }
});

Router.route('/admin/fitness-test/list/:_size/:_offset', function () {
    var size = parseInt(this.params._size);
    var offset = parseInt(this.params._offset);

    this.render('admin_fitness_test', {
        data : function (){
            return {
                list : Programs.find({},{sort:{created_dt:-1, _id: -1}, skip: offset, limit: size})
            }
        }
    });
});

Router.route('/admin/fitness-test/create', {
    data: function (req,res) {
        this.render('admin_fitness_create');
    }
});

Router.route('/admin/fitness-test/content/:_id', function () {
    var id = this.params._id;
    this.render('admin_fitness_content', {
        data: function () {
            return {
                content : Programs.find({_id : id})
            };
        }
    });

});

/*
* TODO Meteor.call을 라우터에서 수행하면 어떨까?
*
* */