///**
// * Created by yijaejun on 2016. 3. 21..
// */
//if(Meteor.isClient){
//
//
//
//    Template['fitness-test-step1'].events({
//        'click .next-btn': function (e) {
//            Session.set('sex', $('input:checked').val());
//            Session.set('age', $('select').val());
//        }
//    });
//
//    Template['fitness-test-step2'].events({
//        'click .next-btn': function (e) {
//            Session.set('bodyType', $('input:checked').val());
//            Session.set('weight', $('input.weight').val());
//            Session.set('height', $('input.height').val());
//            Session.set('waistAround', $('input.waistAround').val());
//            Session.set('hipAround', $('input.hipAround').val());
//        }
//    });
//
//    Template['fitness-test-step3'].events({
//        'click .next-btn': function (e) {
//            Session.set('purpose', $('input:checked').val());
//        }
//    });
//
//    Template['fitness-test-step4'].events({
//        'click .next-btn': function (e) {
//            Session.set('exercise-date', $('select').val());
//        }
//    });
//
//    Template['fitness-test-step5'].events({
//        'click .next-btn': function (e) {
//            Session.set('exercise-level', $('input:checked').val());
//        }
//    });
//
//    Template['fitness-test-result'].helpers({
//        'bodyType': function(){
//            return Session.get('bodyType');
//        },
//        'sex': function (){
//            return Session.get('sex');
//        },
//        'age': function (){
//            return Session.get('age');
//        },
//        'purpose': function () {
//            return Session.get('purpose');
//        },
//        'exerciseDate': function (){
//            return Session.get('exercise-date');
//        },
//        'exerciseLevel': function (){
//            return Session.get('exercise-level');
//        },
//        'height': function (){
//            return Session.get('height');
//        },
//        'weight': function (){
//            return Session.get('weight');
//        },
//        // Body Mass Index
//        'BMI': function () {
//            var
//            height = Session.get('height')/100
//            ,weight = Session.get('weight')
//            ,BMI = Math.round((weight/(height*height))).toFixed(2);
//
//            if(BMI <= 18.5){
//                return '저체중';
//            }else if(BMI > 18.5 && BMI <= 22.9){
//                return '정상';
//            }else if(BMI >= 23 && BMI <= 24.9){
//                return '과체중';
//            }else if(BMI >= 25 && BMI <= 30){
//                return '비만';
//            }else if(BMI > 30){
//                return '고도비만';
//            }else{
//                return '정확한 계산을 위해서 다시 테스트해보세요.';
//            }
//        },
//        'BROCA': function () {
//            var
//            weight = Session.get('weight'),
//            height = Session.get('height'),
//            sex = Session.get('sex');
//
//            if(sex.indexOf('female') !== -1){
//                Session.set('normalWeight', (height-105)*0.9);
//                return (height-105)*0.9;
//            }else if(sex.indexOf('male') !== -1){
//                Session.set('normalWeight', (height-100)*0.9);
//                return (height-100)*0.9;
//            }else{
//                return null;
//            }
//        },
//        'obecityRateByBROCA': function () {
//            var
//            normalWeight = Session.get('normalWeight'),
//            weight = Session.get('weight');
//            return Math.round((weight-normalWeight)/normalWeight*100);
//        },
//        'waistObesity': function (){
//            var
//            waistAround = Session.get('waistAround'),
//            hipAround = Session.get('hipAround');
//
//
//            if(waistAround === undefined && hipAround === undefined){
//                return null;
//            }else{
//                rate = waistAround/hipAround;
//            }
//
//            if(rate >= 0.7 && rate <= 0.8){
//                return '정상';
//            }else if(rate > 0.8 && rate <= 0.9){
//                return '심각';
//            }else if(rate > 0.9){
//                return '위험';
//            }else{
//                return null;
//            }
//
//
//        }
//    });
//
//
//
//
//}