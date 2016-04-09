/**
 * Created by yijaejun on 2016. 4. 9..
 */
if(Meteor.isClient){

	Template.datetimepicker.rendered = function () {
		$('.datetimepicker').datetimepicker({
			inline: true
			,sideBySide: true
			,defaultDate: new Date()
			,dayViewHeaderFormat: 'YYYY-MM'
			,format: 'YYYY-MM-DD hh:mm a'
			// TODO 현재 시간 이전을 선택할 수 없다.
			// TODO input focus 되었을 경우 키보드가 나타나지 않도록 한다.
		});

		$('.bootstrap-datetimepicker-widget').hide();
		$('#startTime').blur();
	};

	Template.selectBody.rendered = function () {

		$('#bodyPart').selectpicker({
			style: 'btn-success'
		});

		$('.selectBody .selectpicker a').bind('click', function () {
			var
			exercise = []
			,selected = null;

			setTimeout(function () {
				selected = $('.selectBody .selectpicker .selected');

				for(var i= 0,size=selected.length;i<size;i++){
					exercise.push({
						bodyPart: selected[i].innerText
					});
				}

				delete Session.keys.exercise;
				Session.set('exercise', exercise);

				console.log(Session.get('exercise'));

				setTimeout(function () {
					$('.workout_wrapper #workout_method').selectpicker({
						style: 'btn-default'
					});
				}, 0);

			},0);

		});
	};


	Template.writeSchedule.rendered = function () {
		delete Session.keys.exercise;
	};

	Template.writeSchedule.helpers({
		exercise: function () {
			return Session.get('exercise');
		}
	});


}