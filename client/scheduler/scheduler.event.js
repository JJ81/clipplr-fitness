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



	/**
	 * TODO 운동할 부위를 선택하면 세션에 저장하고
	 * TODO 세션에 저장이 된 것은 바로 view에 그린다.
	 * TODO 각 부위별로 세트별로 데이터를 설정할 수 있도록 하고
	 * TODO 운동 완료버튼을 선택했을 때 최종 업데이트가 일어난다
	 * TODO 운동을 입력할 때마다 중간 저장이 될 수 있도록 한다.
	 */


}