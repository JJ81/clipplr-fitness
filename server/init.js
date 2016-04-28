
var baseDir = process.env.PWD ? process.env.PWD + "/.uploads" : "/uploads";

/** *
 * TODO: 파일 업로드 시 503 (Service Unavailable) 발생.
 */
Meteor.startup(function () {
    console.log(baseDir);
    UploadServer.init({
        tmpDir: baseDir + '/tmp',
        uploadDir: baseDir,
	    checkCreateDirectories: true, //create the directories for you
        getDirectory: function (fileInfo, formData) {
            // create a sub-directory in the uploadDir based on the content-type (e.g. 'images')
            return formData.contentType;
        },
        finished: function (fileInfo, formFields) {
            // perform a disk operation
            console.log("upload finished, fileInfo ", fileInfo);
            console.log("upload finished, formFields", formFields);
            Uploads.insert(fileInfo);
        },
        cacheTime: 100,
        mimeTypes: {
            "xml": "application/xml",
            "vcf": "text/x-vcard"
        }
    });
});
