/**
 * Created by yijaejun on 2016. 4. 21..
 */

Meteor.subscribe('imageFileUploads');
Meteor.subscribe('movieFileUploads');

Template.admin_exercise_register.helpers({
    theImageFiles: function () {
        return Images.find();
    },
    theMovieFiles: function () {
        return Movies.find();
    }
});

Template.admin_exercise_register.events({
    'click #deleteImageFileButton ': function (event) {
        console.log("deleteImageFile button ", this);
        Images.remove({_id: this._id});
    },
    'change .upload-image-file': function (event, template) {
        console.log("uploading..");
        FS.Utility.eachFile(event, function (file) {
            console.log("each file...");
            var imageFile = new FS.File(file);
            Images.insert(imageFile, function (err, fileObj) {
                console.log("call back for the insert, err: ", err);
                if (!err) {
                    console.log("inserted without error.");
                }
                else {
                    console.log("there was an error.", err);
                }
            });
        });
    },
    'click #deleteMovieFileButton ': function (event) {
        console.log("deleteMovieFileButton ", this);
        Images.remove({_id: this._id});
    },
    'change .upload-movie-file': function (event, template) {
        console.log("uploading..");
        FS.Utility.eachFile(event, function (file) {
            console.log("each file...");
            var movieFile = new FS.File(file);
            Movies.insert(movieFile, function (err, fileObj) {
                console.log("call back for the insert, err: ", err);
                if (!err) {
                    console.log("inserted without error.");
                }
                else {
                    console.log("there was an error.", err);
                }
            });
        });
    }
});