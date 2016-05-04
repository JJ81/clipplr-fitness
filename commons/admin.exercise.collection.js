

Exercise = new Mongo.Collection('admin_create_exercise');
Exercise.attachSchema(new SimpleSchema({
    target: {
        type: String,
        label: "타겟머슬",
        // allowedValues: ['허리'],
        autoform: {
            options: [
                {label: "허리", value: "허리"},
                {label: "다리", value: "다리"},
                {label: "등", value: "등"},
                {label: "가슴", value: "가슴"},
                {label: "복부", value: "복부"},
                {label: "어깨", value: "어깨"},
                {label: "팔", value: "팔"}
            ]
        }
    },
    name: {
        type: String,
        label: "운동명",
        max: 200
    },
    weight: {
        type: String,
        label: "중량",
        allowedValues: ["프리웨이트", "머신"]
    },
    level: {
        type: String,
        label: "난이도",
        autoform: {
            options: [
                {label: "1", value: "1"},
                {label: "2", value: "2"},
                {label: "3", value: "3"},
                {label: "4", value: "4"},
                {label: "5", value: "5"},
                {label: "6", value: "6"},
                {label: "7", value: "7"},
                {label: "8", value: "8"},
                {label: "9", value: "9"}
            ]
        }
    },
    image_link: {
        type: String,
        label: "이미지 링크",
        autoform: {
            placeholder: "http://"
        }
    },
    image_file: {
        type: String,
        label: "이미지 파일"
    },
    video_link: {
        type: String,
        label: "유투브 동영상 링크",
        autoform: {
            placeholder: "http://"
        }
    },
    video_file: {
        type: String,
        label: "동영상 파일"
    },
    descriptions: {
        type: String,
        label: "설명"
    }
}));

Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("fileStore")]
});

Files.allow({
    download: function () {
        return true;
    },
    fetch: null
});