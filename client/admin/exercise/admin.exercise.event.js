/**
 * Created by yijaejun on 2016. 4. 21..
 */
if(Meteor.isClient){
	Template['admin-exercise-register'].events({
		'submit .admin-exercise-write': function (e) {
			e.preventDefault();
			var form = e.target;
			var _data = {};

			// 각 데이터에 접근하여 _data에 저장하고

			// 일차 검사를 하고


			// 데이터를 서버단으로 전달한 후에


			// 메서드단에서 한 번 더 검사를 하고

			// 최종 디비에 저장한다.

			alert('test');
		}
	});



}