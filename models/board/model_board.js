/**
 * Created by yijaejun on 2016. 3. 8..
 */
Boards = new Mongo.Collection('clips');

Meteor.methods({
    // 일정 개수의 콘텐츠를 읽어오는 부분을 이곳에 작성할 수 있다면 어떤 방법이 있을까
    //queryBoard: function () {
    //
    //},

    // 에디터를 통하여 콘텐츠를 작성한다.
    createBoard: function (content) {
        if (!Meteor.userId()) {
            // 로그인이 되지 않을 상태일 때는 로그인 모달이 뜬다.
            throw new Meteor.Error("not-authorized");
        }

        //title : {type : String, trim: true, required: true}
        //,images : {type : String, trim: true, required: true}
        //,contents : [mongoose.Schema.Types.Mixed]
        //,creator : {type : String, trim: true}
        //,authors : Object
        //,publisher : {type : String, trim: true}
        //,clipboard_id : Object
        //,clipbook_id : Object
        //,hit_counts : {type: Number, default: 1}
        //,clipped_counts : {type: Number, default: 1}
        //,hash_tags : Object
        //,isOpen : {type : Boolean, default: true}

        /**
         * TODO string타입으로 입력해야 하는 부분은 디비에 입력되기 전에 좌우공백을 없애야 한다
         * TODO 에디터는 form으로 처리한다.
         * TODO 에디터는 form에서 떠나려고 할 때 prompt 알람을 준다
         */
        Boards.insert({
            images: '',
            title: '',
            description: '',
            content: [], // 콘텐츠 수집을 json타입으로 받아서 배열에 넣는다.
            createdAt: new Date(),
            hash_tags: [],
            creator: Meteor.userId()
            //publisher: 'clipplr',
            //clipboard_id: '',
            //clipbook_id: '',
            //isOpen: true // 초반에는 기본으로 true로 해두지만 이후에 옵션을 넣게 되면 false를 기본값으로 한다
        });
    },

    // 에디터를 통해서 콘텐츠를 수정한다.
    updateBoard: function (id, content) {
        if (!Meteor.userId()) {
            // 로그인이 되지 않을 상태일 때는 로그인 모달이 뜬다.
            throw new Meteor.Error("not-authorized");
        }

        Boards.update(id, {
            images: '',
            title: '',
            description: '',
            content: [], // 콘텐츠 수집을 json타입으로 받아서 배열에 넣는다.
            createdAt: new Date(),
            hash_tags: [],
            creator: Meteor.userId()
            //publisher: 'clipplr',
            //clipboard_id: '',
            //clipbook_id: '',
            //isOpen: true // 초반에는 기본으로 true로 해두지만 이후에 옵션을 넣게 되면 false를 기본값으로 한다
        });
    },

    // 에디터 수정하기를 하다가 삭제를 결정할 수 있다.
    removeBoard: function (id) {
        if (!Meteor.userId()) {
            // 로그인이 되지 않을 상태일 때는 로그인 모달이 뜬다.
            throw new Meteor.Error("not-authorized");
        }

        Boards.remove(id);
    }
});