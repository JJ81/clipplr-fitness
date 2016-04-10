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
		data: function (){
			_data = {
				title: 'My History'
			};
			return _data;
		}
	});

	this.route('schedulerCreate', {
		path: ['/mycoach/record','/mycoach/record/'],
		template: 'scheduler_create',
		layoutTemplate: 'scheduler_layout',
		data: function (){
			_data = {
				title: 'My Record'
			};
			return _data;
		}
	});


});