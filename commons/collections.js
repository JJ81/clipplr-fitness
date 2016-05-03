/**
 * Created by yijaejun on 2016. 4. 9..
 */

// 유저의 운동 기록
FitnessRecord = new Meteor.Collection('fitnessRecord');
// 운동 등록
Exercise = new Mongo.Collection('admin_create_exercise');
// 프로그램, 훈련 등록
Programs = new Mongo.Collection('admin_create_program');

// admin-exercise-regist 이미지 파일 업로드
var createThumb = function (fileObj, readStream, writeStream) {
    // Transform the image into a 10x10px thumnail
    gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
}
Images = new FS.Collection("images", {
    stores: [
        new FS.Store.FileSystem("thumbs", { transformWrite: createThumb }),
        new FS.Store.FileSystem("images", {path: "D:/meteor_image_uploads"})
    ],
    filter: {
        //maxSize: 1048576, // in bytes
        allow: {
            contentTypes: ['image/*'], // allow only images in this FS.Collection
            extensions: ['png']
        },
        onInvalid: function (message) {
            if (Meteor.isClient) {
                alert(message);
            }
            else {
                console.log(message);
            }
        }
    }
});
Images.allow({
    insert: function (userId, doc) {
        // add custom authentication code here
        return true;
    },
    update: function (userId, doc) {
        // add custom authentication code here
        return true;
    },
    remove: function (userId, doc) {
        // add custom authentication code here
        return true;
    },
    download: function (userId, doc) {
        // add custom authentication code here
        return true;
    }
});

// admin_exercise_regist 동영상 파일 업로드
Movies = new FS.Collection("movies", {
    stores: [
        new FS.Store.FileSystem("movies", {path: "D:/meteor_movie_uploads"})
    ]
});
Movies.allow({
    insert: function (userId, doc) {
        // add custom authentication code here
        return true;
    },
    update: function (userId, doc) {
        // add custom authentication code here
        return true;
    },
    remove: function (userId, doc) {
        // add custom authentication code here
        return true;
    },
    download: function (userId, doc) {
        // add custom authentication code here
        return true;
    }
});

