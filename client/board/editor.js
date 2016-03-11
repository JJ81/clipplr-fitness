/**
 * Created by yijaejun on 2016. 3. 9..
 */
if(Meteor.isClient){
    Meteor.subscribe('clips');

    Template.editor.events({
        'submit .new-board': function (event) {
            event.preventDefault();
            var form = event.target;
            var title = form.title.value;
            var images = form.images.value;
            var hashtag = form.hash_tags.value;
            var desc = form.description.value;

            //console.info(images + title + hashtag + desc);
            //Meteor.call("addTask", text);
            //event.target.text.value = "";

            /*
            * TODO save 버튼이 눌렸을 경우 저정중에는 다시 눌릴 수 없도록 한다.
            * TODO 각 필드를 올바르게 입력할 수 있도록 한다.
            * TODO trim() 적용
            *
            * */

            if(title === ''){
                alert('제목을 입력해주세요');
                return false;
            }else if(images === ''){
                alert('이미지 주소를 입력해주세요');
                return false;
            }else if(hashtag === ''){
                alert('키워드를 입력해주세요');
                return false;
            }else if(desc === ''){
                alert('설명을 입력해주세요');
                return false;
            }

            Meteor.call('createBoard', {
                images: images,
                title: title,
                description: desc,
                hash_tags: hashtag,
                content: null
            });
        },
        'submit .modify-board': function () {
            event.preventDefault();
            var form = event.target;
            var id = form.id.value;
            var title = form.title.value;
            var images = form.images.value;
            var hashtag = form.hash_tags.value;
            var desc = form.description.value;

            if(title === ''){
                alert('제목을 입력해주세요');
                return false;
            }else if(images === ''){
                alert('이미지 주소를 입력해주세요');
                return false;
            }else if(hashtag === ''){
                alert('키워드를 입력해주세요');
                return false;
            }else if(desc === ''){
                alert('설명을 입력해주세요');
                return false;
            }

            Meteor.call('updateBoard', id, {
                images: images,
                title: title,
                description: desc,
                hash_tags: hashtag,
                content: null
            });
        },

        'click .deleteBoardBtn': function () {
            Meteor.call('removeBoard', $('.modify-board #id').val());
            Router.go('/list/10/0');
        },

        'click .cancelModifyBtn': function () {
            Router.go('/list/10/0');
        },

        'click .memoryBoardBtn': function () {
            alert('중간저장!!');
        },

        // 웹 스크래핑
        'submit .webscrap': function (event) {
            event.preventDefault();
            Meteor.call('webScrape', event.target.addr.value, function (error, result) {

                if(error) {
                    // todo 스크랩 주소를 다시 확인할 수 있도록 한다
                    console.error('Web Scrapping error');
                }else {
                    console.log(result);
                    //Session.set('scrap_result', data);

                    var data = [];

                    if(!Session.get('editor_data')){
                        console.log('에디어 데이터가 없다');
                        console.log(Session.get('editor_data'));
                         // Session.set('editor_data', data);
                    }else{
                        if(Session.get('editor_data') !== undefined)
                            console.log('에디터에 데이터가 있다');
                            console.log(Session.get('editor_data'));
                            data = Session.get('editor_data');
                            console.info(data);
                    }

                    // Add new data
                    if(result.title !== undefined)
                        data.push(result);

                    // update data in the session.
                    Session.set('editor_data', data);
                }
            });
            event.target.addr.value = '';
        }

        // TODO 필요없는 데이터를 수정할 수 있도록 한다.
        // Session에 있는 데이터를 reload를 통해서도 휴발되지 않는다.
        // 이러한 경우 Sesssion을 통해서만 데이터 관리를 해야 하는 것인지 확인해보자.
        // 로그아웃을 하고 다시 로그인을 해도 사라지지 않는다.
        // TODO 다시, 취소, 저장이 되었을 경우 해당 세션 데이터를 지우도록 한다.
        // TODO 수정하기로 들어올 경우 불러온 데이터중 에디터부분을 세션에 임시 저장한다
        // 만약 브라우저가 꺼지거나 페이지를 이탈하게 되었을 경우는 어떠해야 하는가?
        // 페이지를 이탈하게 될 경우 데이터를 제거할 수 있는 방법이 있는가? beforeunload?
        // 웹스크랩으로 수집된 데이터중 일부를 수정하거나 지울 수 있는 기능을 넣어주자
        // 수정하거나 에디터를 사용하고자 진입할 때 사용했던 세션을 비워야 한다





    });



    Template.editor.helpers({

        isEqual: function (a,b) {
            return (a === b);
        },

        //getScrapResult: function () {
        //    return Session.get('scrap_result');
        //    // delete Session.keys.scrap_result;
        //},

        addEditorData: function () {
            return Session.get('editor_data');
        }
    });

}