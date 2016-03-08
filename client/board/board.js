/**
 * Created by yijaejun on 2016. 3. 8..
 */
if(Meteor.isClient){
    Meteor.subscribe('clips');

    Template.layout.helpers({
        isLogin: function () {
            if(!Meteor.userId()){
                return false;
            }
            return true;
        }
    });

    Template.editor.helpers({

    });

    Template.editor.events({

    });
}