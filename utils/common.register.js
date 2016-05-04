/**
 * Created by yijaejun on 2016. 4. 10..
 */

if(Meteor.isClient){
	Template.registerHelper('incremented', function (index) {
		index++;
		return index;
	});


	Template.registerHelper('isEqual', function (first, second) {
		return (first === second);
	});

  Template.registerHelper('formatDate', function(date) {
    return moment(date).format('YYYY-MM-DD');
  });

}