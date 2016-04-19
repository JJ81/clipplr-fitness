/**
 * Created by yijaejun on 2016. 4. 19..
 */

Router.map(function () {
	/**
	 * 등록한 운동 리스트
	 */
	this.route('AdminExerciseRegister' , {
		path: ['/admin/exercise-register/list/:size/:offset'],
		template: 'admin-exercise-register-list',
		layoutTemplate: 'admin_layout',
		data: function(){
			_data = {
				title: '운동 등록'
			};
			return _data;
		}
	});

	/**
	 * 등록한 훈련 리스트
	 * @ TODO 1. data 조회문법에서 match관련 에러가 발생한다.
	 *
	 */
	this.route('AdminWorkoutRegister', {
		path: ['/admin/workout-register/list/:_size/:_offset'],
		template: 'admin_fitness_test',
		layoutTemplate: 'admin_layout',
		waitOn: function () {
			Meteor.subscribe('Programs');
		},
		data: function () {
			return {
				list : Programs.find({}),
				//list : Programs.find({}, {sort: {activate: -1, created_dt:-1, _id: -1}, skip: this.params._offset, limit: this.params._size}),
				title: '훈련 등록'
			};
		}
	});
});
