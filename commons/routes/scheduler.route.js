/**
 * Created by yijaejun on 2016. 4. 9..
 */

Router.configure({
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loadingSignal'
});

//Router.onBeforeAction('loading');

Router.map(function () {
	this.route('schedulerList', {
		path: ['/scheduler', '/scheduler/', '/scheduler/list', '/scheduler/list/'],
		template: 'scheduler_list',
		layoutTemplate: 'scheduler_layout'
	});

	this.route('schedulerCreate', {
		path: ['/scheduler/create'],
		template: 'scheduler_create',
		layoutTemplate: 'scheduler_layout'
	});


});