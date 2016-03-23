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
            status: data.status,
            createdAt: new Date(),
            creator: Meteor.userId()
        }, function (err) {
            if(err){
                alert('Error Occurred.');
                // 에러가 발생할 경우 뷰 처리는 어떻게 할 수 있는가.
                // 에러를 콜백으로 받을 수 없는 듯 보인다. 테스트가 필요함.
            }
        });
    },

    //queryProgram: function (id) {
    //
    //},

    updateProgram: function (id, data) {
        Programs.update(id,{
            $set: {
                program_title: data.program_title,
                customer_target: data.customer_target,
                program: data.program,
                status: data.status
            }
        }, function (err) {
            if(err){
                alert('Error Occurred.');
            }
        });
    },

    deleteProgram: function (id) {
        Programs.remove({_id: id}, function (err) {
            if(err){
                alert('Error Occurred.');
            }
        });
    }
});


/*
* TODO 프로그램 대상을 설정하면 프로그램 이름 앞에 붙게 설정하자.
* TODO Router.go를 호출할 때 뜨는 에러 해결할 것.
*
* */