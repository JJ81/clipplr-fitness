/**
 * Created by yijaejun on 2016. 4. 9..
 */

Router.configure({
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loadingSignal'
});

//Router.onBeforeAction('loading');

Router.map(function () {

	this.route('fitnessMain', {
		path: ['/mycoach', '/mycoach/', '/mycoach/main', '/mycoach/main/'],
		template: 'fitness_main',
		layoutTemplate: 'scheduler_layout',
		data: function (){
			_data = {
				title: 'Hey, My Coach'
			};
			return _data;
		}
	});

	this.route('schedulerList', {
		path: ['/mycoach/history', '/mycoach/history/'],
		template: 'scheduler_list',
		layoutTemplate: 'scheduler_layout',
		waitOn: function (){
			Meteor.subscribe('FitnessRecord');
		},
		data: function (){
			_data = {
				title: 'My History',
				list: FitnessRecord.find({},{sort: {createdAt:-1}})
			};
			return _data;
		}
	});

	this.route('schedulerViewById', {
		path: ['/mycoach/history/:_id'],
		template: 'scheduler_view',
		layoutTemplate: 'scheduler_layout',
		waitOn: function () {
			Meteor.subscribe('FitnessRecord', this.params._id);
		},
		data: function () {
			_data = {
				title: 'My Record',
				_id: this.params._id,
				content: FitnessRecord.findOne({_id: this.params._id})
				//content: FitnessRecord.findOne({_id: this.params._id}).fetch() // fetch() 메서드 에러
			};
			return _data;
		}
	});


	this.route('schedulerRecord', {
		path: ['/mycoach/record','/mycoach/record/'],
		template: 'scheduler_create',
		layoutTemplate: 'scheduler_layout',
		waitOn: function () {
			// 운동 관련 데이터를 가지고 있다면 해당 콜렉션을 수집하여 동기화한다.
			// Meteor.subscribe('FitnessRecord', this.params._id);
		},
		data: function (){
			_data = {
				title: 'My Record'
			};
			return _data;
		}
	});


	this.route('schedulerModfiy', {
		path: ['/mycoach/modify/:_id','/mycoach/modify/:_id'],
		template: 'scheduler_modify',
		layoutTemplate: 'scheduler_layout',
		waitOn: function () {
			Meteor.subscribe('FitnessRecord', this.params._id);
		},
		data: function (){
			_data = {
				title: 'My Record',
				content: FitnessRecord.findOne({_id: this.params._id})
			};
			return _data;
		}
	});

});