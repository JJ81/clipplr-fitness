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
            * TODO save 버튼으로 저장을 했을 경우, 저장한 것을 바로 바인딩할 수 있도록 한다
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
                content: null,
                createdAt: new Date()
            });
        }
    });


}

