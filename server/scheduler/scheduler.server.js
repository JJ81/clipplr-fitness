/**
 * Created by yijaejun on 2016. 4. 9..
 */
if(Meteor.isServer){ // server 블록이 없어도 서버로 인식하는가?
	Meteor.methods({
		getRecordById: function (_id) {
			return FitnessRecord.findOne({_id: _id});
		},

		/**
		 *
		 * @param data
		 */
		setRecord: function(_data){
			// 날짜와 시간 형식을 통일한다.
			_data.createdAt = new Date();
			_data.endDt = new Date();

			// 일단 테스트를 위해서 주석처리한다.
			if(Meteor.userId()){
				_data.userId = Meteor.userId();
			}else{
				_data.userId = null;
			}



			// 여기에서 validate코드를 넣어서 검사하자.



			// @여기서 리턴을 해주어야 클라이언트단에서 콜백으로 result로 id를 받을 수 있다.
			return FitnessRecord.insert(_data, function (error, result) {
				if(error) {
					throw Meteor.Error("Failed to insert your data.");
				} else {
					console.info(result);
				}
			});
		},

		updateRecord: function (_id, _data){

			// 여기서도 저장할 때와 마찬가지로 공통의 validate로직을 만들어서 적용해야 한다.


			return FitnessRecord.update(_id, {
				$set: {

				}
			}, function (error, result){
				if(error){
					throw Meteor.Error("Failed to update your data.");
				}else{
					console.info(result);
				}
			})
		},

		deleteRecord: function (_id) {
			return FitnessRecord.remove(_id, function (error, result) {
				if(error){
					throw Meteor.Error("Failed to delete " + _id);
				}else{
					console.info(result);
				}
			});
		}

	});

	Meteor.publish('FitnessRecord', function () {
		return FitnessRecord.find({},{sort: {createdAt: -1}});
	});
}

