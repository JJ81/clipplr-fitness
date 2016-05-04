/**
 * Created by yijaejun on 2016. 4. 19..
 */

Router.map(function () {
	/**
	 * 등록한 운동 리스트
	 */
	this.route('AdminExerciseList' , {
		path: ['/admin/exercise-register/list/:size/:offset'],
		template: 'admin-exercise-register-list',
		layoutTemplate: 'admin_layout',
		waitOn: function () {
			Meteor.subscribe('Exercise');
		},
		data: function() {
			return {
				title: '운동 등록',
				// list : Exercise.find({})
				list : Exercise.find({}, {sort: {activate: -1}})
			};
		}
	});

	/**
	 * 등록한 운동 내용
	 */
	this.route('AdminExerciseContent', {
		path: ['/admin/exercise-register/content/:_id'],
		template: 'admin-exercise-content',
		layoutTemplate: 'admin_layout',
		waitOn: function () {
			Meteor.subscribe('Exercise', this.params._id);
		},
		data: function () {
			return {
				title: '운동 등록',
				_id: this.params._id,
				content: Exercise.findOne({_id: this.params._id})
			};
		}
	});

	/**
	 * 운동 등록 설정
	 */
	this.route('AdminExerciseWrite', {
		path: ['/admin/exercise-register/write'],
		template: 'admin-exercise-register',
		layoutTemplate: 'admin_layout',
		data: function () {
			return {
				title: '운동 등록'
			};
		}
	});

	/**
	 * 등록한 운동 수정
	 */
	this.route('AdminExerciseModify', {
		path: ['/admin/exercise-register/modify/:_id'],
		template: 'admin-exercise-modify',
		layoutTemplate: 'admin_layout',
		waitOn: function () {
			Meteor.subscribe('Exercise', this.params._id);
		},
		data: function () {
			return {
				title: '운동 수정',
				_id: this.params._id,
				content: Exercise.findOne({_id: this.params._id})
			};
		}
	});


	/**
	 * 등록한 훈련 리스트
	 * @ TODO 1. data 조회문법에서 match관련 에러가 발생한다.
	 * TODO 2. 훈련 관련 라우터 형태를 모두 아래와 같이 수정할 것.
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
				list : Programs.find({}, {sort: {activate: -1}}),
				//list : Programs.find({}, {sort: {activate: -1, created_dt:-1, _id: -1}, skip: this.params._offset, limit: this.params._size}),
				title: '훈련 등록'
			};
		}
	});
});



