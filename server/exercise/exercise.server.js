/**
 * Created by yijaejun on 2016. 4. 19..
 */
if(Meteor.isServer){

	Meteor.methods({
		getExercise: function () {

		},

		geExerciseById: function (_id) {

		},

		setExercise: function (_data) {
			// 한 번 더 데이터를 검사할 것.
			// _data validation
			_data.activate = false;
			if(Meteor.userId()){
				_data.creator = {
					id: Meteor.user().id,
					username: Meteor.user().username
				};
			}else{
				_data.creator = null;
			}

			_data.createdAt = new Date();

			return Exercise.insert(_data, function (error, result) {
				if(error) {
					throw Meteor.Error("Failed to insert your data.");
				} else {
					console.info(result);
					return result;
				}
			});
		},

		updateExercise: function (_id, _data) {

		},

		deleteExercise: function (_id) {
			return Exercise.remove(_id, function (error, result) {
				if(error){
					throw Meteor.Error("Failed to delete " + _id);
				}else{
					console.info(result);
				}
			});
		}
	});

	Meteor.publish('Exercise', function () {
		return Exercise.find({}, {sort: {activate: -1}});
	});
}