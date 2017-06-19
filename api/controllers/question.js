var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Round = mongoose.model('Round');
var path = require('path');

module.exports.save = function(req, res){

    var question = new Question();
    var round = new Round();
    var count = parseInt(req.params.count);
    console.log(count);

    question.first = req.body.first;
    question.second = req.body.second;
    question.difficulty = req.body.difficulty;
    question.userId = req.body.userID;

    switch (count) {
        case 1:
            round.question1.push(question);
            saving(round);
            break;
        case 2:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question2.push(question);
                    saving(obj);
                }
            });
            break;
        case 3:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question3.push(question);
                    saving(obj);
                }
            });
            break;
        case 4:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question4.push(question);
                    saving(obj);
                }
            });
            break;
        case 5:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question5.push(question);
                    saving(obj);
                }
            });
            break;
        case 6:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question6.push(question);
                    saving(obj);
                }
            });
            break;
        case 7:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question7.push(question);
                    saving(obj);
                }
            });
            break;
        case 8:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question8.push(question);
                    saving(obj);
                }
            });
            break;
        case 9:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question9.push(question);
                    saving(obj);
                }
            });
            break;
        case 10:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question10.push(question);
                    saving(obj);
                }
            });
            break;
        case 11:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question11.push(question);
                    saving(obj);
                }
            });
            break;
        case 12:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question12.push(question);
                    saving(obj);
                }
            });
            break;
        case 13:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question13.push(question);
                    saving(obj);
                }
            });
            break;
        case 14:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question14.push(question);
                    saving(obj);
                }
            });
            break;
        case 15:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question15.push(question);
                    saving(obj);
                }
            });
            break;
        case 16:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question16.push(question);
                    saving(obj);
                }
            });
            break;
        case 17:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question17.push(question);
                    saving(obj);
                }
            });
            break;
        case 18:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question18.push(question);
                    saving(obj);
                }
            });
            break;
        case 19:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question19.push(question);
                    saving(obj);
                }
            });
            break;
        case 20:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question20.push(question);
                    saving(obj);
                }
            });
            break;
        case 21:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question21.push(question);
                    saving(obj);
                }
            });
            break;
        case 22:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question22.push(question);
                    saving(obj);
                }
            });
            break;
        case 23:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question23.push(question);
                    saving(obj);
                }
            });
            break;
        case 24:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question24.push(question);
                    saving(obj);
                }
            });
            break;
        case 25:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question25.push(question);
                    saving(obj);
                }
            });
            break;
        case 26:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question26.push(question);
                    saving(obj);
                }
            });
            break;
        case 27:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question27.push(question);
                    saving(obj);
                }
            });
            break;
        case 28:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question28.push(question);
                    saving(obj);
                }
            });
            break;
        case 29:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question29.push(question);
                    saving(obj);
                }
            });
            break;
        case 30:
            Round.findOne({'question1.userId': question.userId}, function (err, obj){
                if(err){
                    console.log("something went wrong");
                }else {
                    obj.question30.push(question);
                    saving(obj);
                }
            });
            break;
    }

    function saving(round) {
        round.save(function (err) {
            res.status(200);
            res.json({
                "status": "everything is saved"
            });
            if (err) {
                res.status(400);
                res.json({
                    "status": "something went wrong"
                });
            }
        });
    }
};