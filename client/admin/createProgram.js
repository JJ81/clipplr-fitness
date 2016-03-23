/**
 * Created by yijaejun on 2016. 3. 22..
 */
if(Meteor.isClient){
    Meteor.subscribe('admin_create_program');

    /*
    * TODO 각 input 필드에서 엔터 이벤트 방지할 것
    * TODO 프로그램 대상은 동적으로 생성하고 가져올 수 있어야 한다.
    * */
    Template.admin_fitness_create.events({
        'submit .program-form': function (event) {
            event.preventDefault();
            var form = event.target;
            var program_title = form.program_title.value;
            var customer_target = form.target.value;
            var program = [];

            program.push({
                body_pos: form.body_pos.value,
                exercise_title: form.exercise_title.value,
                image_url: form.image_url.value,
                video_url: form.video_url.value,
                description: form.description.value
            });


            Meteor.call('createProgram', {
                program_title: program_title,
                customer_target: customer_target,
                program: program
            });



        }
    });

    Template.admin_fitness_create.helpers({
        // editor template에서 사용하고 있는 부분과 동일하여 공통으로 사용할 수 있도록 변경할 수 있어야 할 것이다
        isEqual: function (a,b) {
            return (a === b);
        }
    });

    Template.admin_fitness_test.helpers({

    });


}
