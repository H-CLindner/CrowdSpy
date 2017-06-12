var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Round = mongoose.model('Round');
var path = require('path');

module.exports.save = function(req, res){

    var question = new Question();
    var round = new Round();

    question.first = req.body.first;
    question.second = req.body.second;
    question.difficulty = req.body.difficulty;
    question.userId = req.body.userID;

    round.question1 = question;

    round.save(function(err) {
        res.status(200);
        res.json({
            "status": "everything is saved"
        });
        if(err){
            res.status(400);
            res.json({
                "status": "something went wrong"
            });
        }
    });

};