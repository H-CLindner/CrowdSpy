var express = require('express');
var router = express.Router();

var ctrlQuestion = require('../controllers/question');

router.post('/save/:count', ctrlQuestion.save);

module.exports = router;