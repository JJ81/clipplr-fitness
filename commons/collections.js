/**
 * Created by yijaejun on 2016. 4. 9..
 */
// 게시판
Boards = new Mongo.Collection('clips');
// 유저의 운동 기록
FitnessRecord = new Meteor.Collection('fitnessRecord');
// 운동 등록
Exercise = new Mongo.Collection('admin_create_exercise');
// 프로그램, 훈련 등록
Programs = new Mongo.Collection('admin_create_program');


