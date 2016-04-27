/**
 * Created by yijaejun on 2016. 4. 9..
 */

if(Meteor.isClient){
	Template.datetimepicker.events({
		/**
		 * proxy to show calendar widget
		 */
		'click #startTime': function () {
			$('.input-group-addon').click();
		},

		/**
		 * prevent input field from writing by key-down event.
		 * @returns {boolean}
		 */
		'keydown #startTime': function () {
			return false;
		}

	});

	Template.datetimepicker_modify.events({
		/**
		 * proxy to show calendar widget
		 */
		'click #startTime': function () {
			$('.input-group-addon').click();
		},

		/**
		 * prevent input field from writing by key-down event.
		 * @returns {boolean}
		 */
		'keydown #startTime': function () {
			return false;
		}

	});

	Template.writeSchedule.events({
		/**
		 * 빈 세트 폼 추가
		 * @param event
		 */
		'click .add-set-btn': function (event) {
			var
			exerciseid = $(event.currentTarget).attr('data-exercise-id')
			,_data = Session.get('exercise');

			_data[exerciseid].record.push({});
			Session.set('exercise', _data);

			// TODO 공통영역으로 변경하여 호출할 수 있도록 한다.
			setTimeout(function () {
				$('.workout_wrapper #workout_method').selectpicker({
					style: 'btn-default'
				});
			}, 0);

		},

		/**
		 * 선택한 세트 기록 제거
		 * @param event
		 */
		'click .delete-set-btn': function (event) {

			var // TODO exerciseid 데이터에 접근하기 위한 다른 아이디어가 필요하다.
			exerciseid = $(event.currentTarget).parent().parent().parent().find('h3').attr('data-exercise-id')
			,setid = $(event.currentTarget).attr('data-set-id');
			//console.log(exerciseid + '/' + setid);

			var _data = Session.get('exercise');
			_data[exerciseid].record.splice([setid], 1);
			Session.set('exercise', _data);
		}
	});


	// TODO layout 템플릿에 있는 이 버튼들은 어떻게 처리할지 다시 생각해보자.
	Template.scheduler_layout.events({
		/**
		 * 운동 데이터를 저장한다.
		 * @param e
		 */
		'click .save-record-btn': function (e) {
			e.preventDefault();
			/*
				2. 로그인을 했는지 여부를 체크한다 (페이지 진입시 처리한다. Router단에서 처리!!)
			  3. 하단의 _data 데이터 구조를 스킴으로 만들고 타당성 검사도 할 수 있도록 변경한 후에 서버단에서도 검사를 할 수 있도록 한다.
			  4. 이 데이터들을 기반으로 jasmine 테스트를 작성해본다.
		    5. new Date()로 생성된 것을 정리해야 한다 moment로 된 것으로 정리해 넣자. 혹은 포맷을 만들어주는 공통 로직을 정리하자.
		    6.
			*/

			// TODO 여기서부터 각 input에 대한 validate 처리한다.

			var _data = {
				startDt: $('#startTime').val()
				,body: []
				,record: []
			};

			var part = Session.get('exercise');
			var part_size = part.length;
			if(!part){
				alert('운동할 부위를 선택하세요');
			}else{
				// 세션에 담긴 데이터를 기반으로 사용자가 입력한 데이터를 담을 구조를 준비한다.
				for(var i = 0;i<part_size;i++){
					_data.body.push(part[i].body);
					_data.record.push({
						body: part[i].body,
						workout: new Array(part[i].record.length)
					});
				}
			}

			var workout_wrapper = $('.workout_wrapper');
			var workout_wrapper_size = workout_wrapper.length;
			for(var i = 0;i<workout_wrapper_size;i++){
				var forms = workout_wrapper.eq(i).find('form');
				var forms_size = forms.length;

				for(var j=0;j<forms_size;j++){
					_data.record[i].workout[j] =
					{
						setOrder: forms.eq(j).find('#setOrder').val(),
						type: forms.eq(j).find('.selected').text(),
						weight: forms.eq(j).find('#weight').val(),
						count: forms.eq(j).find('#count').val(),
						interval: forms.eq(j).find('#interval').val(),
						memo: forms.eq(j).find('#memo').val()
					};
				}
			}

			console.log(_data);


			// 전송하기 전에 모든 데이터가 완벽하게 들어갔는지 확인한다.
			Meteor.call('setRecord', _data, function (error, result) {
				if(error){
					console.error(error);
				}	else{
					console.info(result);
					Router.go('/mycoach/history/' + result);
				}
			});
		}
	});

	Template.scheduler_view.events({
		// Delete record
		'click .delete-record-btn': function (e) {
			e.preventDefault();

			var
			_id = $(e.currentTarget).attr('data-id')
			,res = window.confirm('정말로 삭제하시겠습니까?');

			if(!res)
				return;

			Meteor.call('deleteRecord', _id, function (error, result) {
				if(error){
					console.error('Something went wrong');
				}else{
					Router.go('/mycoach/history');
				}
			});
		},

		// Go to modify record
		'click .modify-record-btn': function (e) {
			e.preventDefault();
			Router.go('/mycoach/modify/' + $(e.currentTarget).attr('data-id'));
		}
	});


}