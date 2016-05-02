/**
 * Created by yijaejun on 2016. 4. 21..
 */
if(Meteor.isClient){

	Template['admin-exercise-register'].events({
		'submit .admin-exercise-write': function (e) {
			e.preventDefault();
			var form = e.target;
			var _data = {};


			// TODO 1 각 데이터에 접근하여 _data에 저장하고
			var target_muscle = form.target_muscle.options[form.target_muscle.selectedIndex].value;
			var name = form.name.value;
			var type = form.type.value;
			var level = form.level.value;
			var photo_link = form.photo_link.value; // 가변적으로 늘어날 수 있다.
			var photo_file = form.photo_file.value;
			var video_link = form.video_link.value;
			var video_file = form.video_file.value;
			var desc = form.desc.value;

			_data = {
				target: form.target_muscle.options[form.target_muscle.selectedIndex].value,
				name: form.name.value,
				type: form.type.value,
				level: form.level.value,
				photo_link: form.photo_link.value,
				photo_file: form.photo_file.value,
				video_link: form.video_link.value,
				video_file: form.video_file.value,
				desc: form.desc.value
			};

			console.info(_data);

			// 일차 검사를 하고 (일단 넘어가고)

			// 데이터를 서버단으로 전달한 후에
			Meteor.call('setExercise', _data, function (error, result) {
				if(error){
					console.info(error);
				}else{
					console.info(result);
					Router.go('/admin/exercise-register/list/20/0');
				}
			});

			// 메서드단에서 한 번 더 검사를 하고


			// 최종 디비에 저장한다.

			alert('저장');
		},

		'click .register-cancel-btn': function (e) {
			window.location.href = '/admin/exercise-register/list/20/0';
			// Router.go('login'); // this is not workking...weird..
			// Router.redirect('/admin/exercise-register/list/20');
		}


	});

	Template['admin-exercise-content'].events({
		'click .delete-exercise-btn': function (e) {
			e.preventDefault();

			var
				_id = $(e.currentTarget).attr('data-id')
				,res = window.confirm('정말로 삭제하시겠습니까?');

			if(!res)
				return;

			Meteor.call('deleteExercise', _id, function (error, result) {
				if(error){
					console.error('Something went wrong');
				}else{
					Router.go('/admin/exercise-register/list/20/0');
				}
			});
		},

		'click .back-exercise-btn': function () {
			history.back();
		},

		'click .modify-exercise-btn': function (e) {
			e.preventDefault();
			Router.go('/admin/exercise-register/modify/' + $(e.currentTarget).attr('data-id'));
		}
	});

	Template['admin-exercise-register-list'].events({
		'click .activate-exercise-btn': function (e) {
			e.preventDefault();
			Meteor.call('updateExerciseActivate', $(e.currentTarget).attr('data-id'), true, function (error, result) {
				if(error){
					console.error('activate failed');
				}
			});

		},

		'click .inactivate-exercise-btn': function (e) {
			e.preventDefault();
			Meteor.call('updateExerciseActivate', $(e.currentTarget).attr('data-id'), false, function (error, result) {
				if(error){
					console.error('inactivate failed');
				}
			});
		}
	});

}