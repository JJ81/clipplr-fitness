/**
 * Created by yijaejun on 2016. 3. 22..
 */
if(Meteor.isClient){
    Meteor.subscribe('admin_create_program');

    var confirmOnPageExit = function (e) {
        // If we haven't been passed the event get the window.event
        e = e || window.event;

        var message = '저장없이 이 페이지를 떠나시겠습니까?';

        // For IE6-8 and Firefox prior to version 4
        if (e) {
            e.returnValue = message;
        }

        // For Chrome, Safari, IE8+ and Opera 12+
        return message;
    };


    /*
    * TODO 각 input 필드에서 엔터 이벤트 방지할 것
    * TODO 프로그램 대상은 동적으로 생성하고 가져올 수 있어야 한다.
    * */
    Template.admin_fitness_create.events({
        // TODO 각 input에 enter 이벤트를 막아준다.
        'submit .program-form': function (event) {
            event.preventDefault();
            var form = event.target;
            var program_title = form.program_title.value;
            var customer_target = form.target.value;
            var status = false; // 비활성화
            var program = [];
            var form2 = $('form')[1];
            var size = parseInt(form2.length/5);
            var i = 0;

            if(size > 1) {
                for (; i < size; i++) {
                    program.push({
                        exercise_title: form2.exercise_title[i].value,
                        body_pos: form2.body_pos[i].value,
                        image_url: form2.image_url[i].value,
                        video_url: form2.video_url[i].value,
                        description: form2.description[i].value
                    });
                }
            }else{
                program.push({
                    exercise_title: form2.exercise_title.value,
                    body_pos: form2.body_pos.value,
                    image_url: form2.image_url.value,
                    video_url: form2.video_url.value,
                    description: form2.description.value
                });
            }

            Meteor.call('createProgram', {
                program_title: program_title,
                customer_target: customer_target,
                program: program,
                status: status
            }, function (){
                alert('save successfully');
                Router.go('/admin/fitness-test/list/10/0');
            });
        },

        /**
         * TODO 입력이 되지 않은 필드가 있을 경우 경고문구를 띄우고 전송을 막는다.
         * TODO 이중 전송을 막는다.
         * TODO 운동 프로그램을 모두 지울 경우 Maximum call stack size exceeded 에러가 발생한다.
         * TODO 운동 프로그램을 일부 지우고 업데이트 할 경우 문제가 발생한다.
         * @param event
         */
        'submit .program-modify-form': function (event){ //update, 생성하는 소스와 중복됨. 리팩토링이 필요함.
            event.preventDefault();
            var form = event.target;
            var id = form.id.value;
            var program_title = form.program_title.value;
            var customer_target = form.target.value;
            var status = '대기중';
            var program = [];
            var form2 = document.forms[1];
            var size = parseInt(form2.length/5);
            var i = 0;


            if(size > 1) {
                for (; i < size; i++) {
                    program.push({
                        exercise_title: form2.exercise_title[i].value,
                        body_pos: form2.body_pos[i].value,
                        image_url: form2.image_url[i].value,
                        video_url: form2.video_url[i].value,
                        description: form2.description[i].value
                    });
                }
            }else{
                program.push({
                    exercise_title: form2.exercise_title.value,
                    body_pos: form2.body_pos.value,
                    image_url: form2.image_url.value,
                    video_url: form2.video_url.value,
                    description: form2.description.value
                });
            }

            Meteor.call('updateProgram', id, {
                program_title: program_title,
                customer_target: customer_target,
                program: program,
                status: status
            }, function (){
                alert('update successfully');
                Router.go('/admin/fitness-test/content/'+ id);
            });
        },

        'click .add-program-btn': function () {
            Blaze.render(Template.program_form, $('.program-parts').get(0));
        },

        'click .delete-program-btn': function (event) {
            $(event.currentTarget).parent('.program-unit').remove();
        },

        'click .delete-whole-program-btn': function (event) {
            Meteor.call('deleteProgram', $(event.currentTarget).attr('data-id'),
            function () { // Meteor.call를 통해서 이와 같이 cb를 받을 수 있다. 이곳에서 리다이렉트를 해야 에러가 나지 않는다.
                alert('Deleted it successfully.');
                Router.go('/admin/fitness-test/list/10/0');
            });
        }
    });

    Template.admin_fitness_create.rendered = function(e) {
        // TODO 저장이 되었는지 여부를 확인한 후에 얼럿을 띄울 수 있도록 한다. (현재는 잘 되는 듯 함)
        // TODO 뒤로가기 버튼을 사용할 경우, confirm창이 뜨지 않는다. 왜 그런지 조사하고 해결책을 찾을 것!
        window.onbeforeunload = confirmOnPageExit;
    };

    Template.admin_fitness_create.helpers({
        // editor template에서 사용하고 있는 부분과 동일하여 공통으로 사용할 수 있도록 변경할 수 있어야 할 것이다
        isEqual: function (a,b) {
            return (a === b);
        }

    });

    // 뒤로 가기 버튼과 같은 공통 기능은 어디로 유틸로 사용할 수 없을까?
    Template.admin_fitness_content.events({
        'click .back-btn': function () {
            window.history.back(-1);
        }
    });

    // 공통으로 사용할 부분은 이와 같이 등록할 수 있을 것 같다.
    Template.registerHelper('formatDate', function(date) {
        return moment(date).format('YYYY-MM-DD');
    });

}
