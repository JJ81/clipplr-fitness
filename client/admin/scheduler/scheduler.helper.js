/**
 * Created by yijaejun on 2016. 4. 9..
 */
if(Meteor.isClient){

	Template.datetimepicker.rendered = function () {
		$('.datetimepicker').datetimepicker({
			inline: true
			,sideBySide: true
			,defaultDate: new Date()
			,dayViewHeaderFormat: 'YYYY-MM'
			,format: 'YYYY-MM-DD hh:mm a'
			// TODO 현재 시간 이전을 선택할 수 없다.
			// TODO input focus 되었을 경우 키보드가 나타나지 않도록 한다.
		});

		$('.bootstrap-datetimepicker-widget').hide();
		$('#startTime').blur();
	};

	Template.datetimepicker_modify.rendered = function () {
		// TODO 공통영역으로 리팩토링할 것
		$('.datetimepicker').datetimepicker({
			inline: true
			,sideBySide: true
			,defaultDate: Session.get('exercise').startDt
			,dayViewHeaderFormat: 'YYYY-MM'
			,format: 'YYYY-MM-DD hh:mm a'
			// TODO 현재 시간 이전을 선택할 수 없다.
			// TODO input focus 되었을 경우 키보드가 나타나지 않도록 한다.
		});

		$('.bootstrap-datetimepicker-widget').hide();
		$('#startTime').blur();

	};

	Template.selectBody_modify.rendered = function () {
		$('#bodyPart').selectpicker({
			style: 'btn-success'
		});

		// 선택된 부위를 모두 선택이 된 상태로 되어야 한다 어떻게 하면 되겠는가?
		var body = [];
		var getbBodyFromSession = null;
		setTimeout(function () {
			getbBodyFromSession = Session.get('exercise');
			var body = getbBodyFromSession.body;

			for(var i= 0,size=body.length;i<size;i++){
				for(var j= 0,size2=$('.selectBody .selectpicker a').length;j<size2;j++){
					//console.log( '기준: ' + body[i] );
					//console.log( '비교: ' + $('.selectBody .selectpicker a').eq(j).text() );
					//console.log( '결과: ' + (body[i].trim() === $('.selectBody .selectpicker a').eq(j).text()) );

					// TODO 디비에 넣을 때 trim()을 해서 넣을 것
					if( body[i].trim() === $('.selectBody .selectpicker a').eq(j).text() ){
						$('.selectBody .selectpicker a').eq(i).click();
					}
				}
			}
		},10);
	};

	Template.selectBody.rendered = function () {
		$('#bodyPart').selectpicker({
			style: 'btn-success'
		});


		/**
		 * 자동생성된 li 드롭박스 메뉴에서 특정 li를 선택했을 경우
		 */
		$('.selectBody .selectpicker a').bind('click', function () {
			var
			exercise = []
			,selected = null;

			setTimeout(function () {
				selected = $('.selectBody .selectpicker .selected');

				for(var i= 0,size=selected.length;i<size;i++){
					exercise.push({
						body: selected[i].innerText,
						record: [{}]
					});
				}

				// TODO 이렇게 키 자체를 모두 지워도 될까?
				delete Session.keys.exercise;
				Session.set('exercise', exercise);

				console.log(Session.get('exercise'));

				// TODO 공통영역으로 변경하여 적용하도록 한다.
				setTimeout(function () {
					$('.workout_wrapper #workout_method').selectpicker({
						style: 'btn-default'
					});
				}, 0);

			},0);

		});
	};
	Template.writeSchedule_modify.helpers({
		recordData: function() {
			return Session.get('exercise');
		}
	});

	Template.writeSchedule_modify.rendered = function () {
		//
		console.log('renderd writeSchedule');
		//recordData: function() {
		//	return Session.get('exercise');
		//}

	};

	/**
	 * 운동할 부위가 선택되지 않았을 경우 세션에서 데이터를 지운다.
	 */
	Template.writeSchedule.rendered = function () {
		delete Session.keys.exercise;
	};

	/**
	 * 운동 기록 부분 데이터 세팅
	 */
	Template.writeSchedule.helpers({
		exercise: function () {
			return Session.get('exercise');
		}
	});


	Template.scheduler_modify.helpers({
		pastRecord: function (id) {
			// TODO 호출이 두 번 된다 이유가 뭔가?
			Meteor.call('getRecordById', id, function (error, result) {
				if(error){
					console.error('Error occurred during fetching data ' + id);
				}else{
					console.log('Check calling');

					if(!Session.get('exercise')){
						delete Session.keys.exercise;
						Session.set('exercise', result);
						console.info(Session.get('exercise'));
					}
				}
			})
		}
	});

	Template.datetimepicker_modify.helpers({
		StartDt: function () {
			return Session.get('exercise').startDt;
		}
	});
}