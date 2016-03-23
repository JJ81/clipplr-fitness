/**
 * Created by yijaejun on 2016. 3. 22..
 */

// 이 부분이 나중에 각 PT별로 제공될 DB 콜렉션이다.
Programs = new Mongo.Collection('admin_create_program');

Meteor.methods({
    createProgram: function (data) {
        Programs.insert({
            program_title: data.program_title,
            customer_target: data.customer_target,
            program: data.program,
            status: '대기중',
            createdAt: new Date(),
            creator: Meteor.userId()
        }, function (err) {
            if(err){
                alert('Error Occurred.');
            }else{
                Router.go('/admin/fitness-test/list/10/0');
            }
        });
    },

    //queryProgram: function (id) {
    //
    //},

    updateProgram: function (id) {

    },

    deleteProgram: function (id) {

    }
});


/*
* TODO 프로그램 대상을 설정하면 프로그램 이름 앞에 붙게 설정하자.
* TODO Router.go를 호출할 때 뜨는 에러 해결할 것.
*
* */