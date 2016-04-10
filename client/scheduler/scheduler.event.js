/**
 * Created by yijaejun on 2016. 4. 9..
 */

if(Meteor.isClient){
	Template.datetimepicker.events({
		/**
		 * proxy to show calendar widget
		 */
		'click #startTime': function () {
			$('.input-group-addon').click();
		},

		/**
		 * prevent input field from writint by key-down event.
		 * @returns {boolean}
		 */
		'keydown #startTime': function () {
			return false;
		}

	});

	Template.writeSchedule.events({
		/**
		 * 빈 세트 폼 추가
		 * @param event
		 */
		'click .add-set-btn': function (event) {
			var
			exerciseid = $(event.currentTarget).attr('data-exercise-id')
			,_data = Session.get('exercise');

			_data[exerciseid].sets.push({});
			Session.set('exercise', _data);
		},

		/**
		 * 선택한 세트 기록 제거
		 * @param event
		 */
		'click .delete-set-btn': function (event) {

			var // TODO exerciseid 데이터에 접근하기 위한 다른 아이디어가 필요하다.
			exerciseid = $(event.currentTarget).parent().parent().parent().find('h3').attr('data-exercise-id')
			,setid = $(event.currentTarget).attr('data-set-id');
			//console.log(exerciseid + '/' + setid);

			var _data = Session.get('exercise');
			_data[exerciseid].sets.splice([setid], 1);
			Session.set('exercise', _data);
		}
	});




}