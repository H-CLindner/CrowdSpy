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
    console.log(question.first);
    console.log(question.second);
    console.log(question.difficulty);
    console.log(question.userId);

    switch (count) {
        case 1:
            round.question1.push(question);
            saving(round);
            break;
        case 2:
            round.question2.push(question);
            saving(round);
            break;
        case 3:
            round.question3.push(question);
            saving(round);
            break;
        case 4:
            round.question4.push(question);
            saving(round);
            break;
        case 5:
            round.question5.push(question);
            saving(round);
            break;
        case 6:
            round.question6.push(question);
            saving(round);
            break;
        case 7:
            round.question7.push(question);
            saving(round);
            break;
        case 8:
            round.question8.push(question);
            saving(round);
            break;
        case 9:
            round.question9.push(question);
            saving(round);
            break;
        case 10:
            round.question10.push(question);
            saving(round);
            break;
        case 11:
            round.question11.push(question);
            saving(round);
            break;
        case 12:
            round.question12.push(question);
            saving(round);
            break;
        case 13:
            round.question13.push(question);
            saving(round);
            break;
        case 14:
            round.question14.push(question);
            saving(round);
            break;
        case 15:
            round.question15.push(question);
            saving(round);
            break;
        case 16:
            round.question16.push(question);
            saving(round);
            break;
        case 17:
            round.question17.push(question);
            saving(round);
            break;
        case 18:
            round.question18.push(question);
            saving(round);
            break;
        case 19:
            round.question19.push(question);
            saving(round);
            break;
        case 20:
            round.question20.push(question);
            saving(round);
            break;
        case 21:
            round.question21.push(question);
            saving(round);
            break;
        case 22:
            round.question22.push(question);
            saving(round);
            break;
        case 23:
            round.question23.push(question);
            saving(round);
            break;
        case 24:
            round.question24.push(question);
            saving(round);
            break;
        case 25:
            round.question25.push(question);
            saving(round);
            break;
        case 26:
            round.question26.push(question);
            saving(round);
            break;
        case 27:
            round.question27.push(question);
            saving(round);
            break;
        case 28:
            round.question28.push(question);
            saving(round);
            break;
        case 29:
            round.question29.push(question);
            saving(round);
            break;
        case 30:
            round.question30.push(question);
            saving(round);
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