var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var questionSchema = require('./question').schema;

var roundSchema = new mongoose.Schema({

    question1: {
        type: [questionSchema],
        required: false
    },

    question2: {
        type: [questionSchema],
        required: false
    },

    question3: {
        type: [questionSchema],
        required: false
    },

    question4: {
        type: [questionSchema],
        required: false
    },

    question5: {
        type: [questionSchema],
        required: false
    },

    question6: {
        type: [questionSchema],
        required: false
    },

    question7: {
        type: [questionSchema],
        required: false
    },

    question8: {
        type: [questionSchema],
        required: false
    },

    question9: {
        type: [questionSchema],
        required: false
    },

    question10: {
        type: [questionSchema],
        required: false
    },

    question11: {
        type: [questionSchema],
        required: false
    },

    question12: {
        type: [questionSchema],
        required: false
    },

    question13: {
        type: [questionSchema],
        required: false
    },

    question14: {
        type: [questionSchema],
        required: false
    },

    question15: {
        type: [questionSchema],
        required: false
    },

    question16: {
        type: [questionSchema],
        required: false
    },

    question17: {
        type: [questionSchema],
        required: false
    },

    question18: {
        type: [questionSchema],
        required: false
    },

    question19: {
        type: [questionSchema],
        required: false
    },

    question20: {
        type: [questionSchema],
        required: false
    },

    question21: {
        type: [questionSchema],
        required: false
    },

    question22: {
        type: [questionSchema],
        required: false
    },

    question23: {
        type: [questionSchema],
        required: false
    },

    question24: {
        type: [questionSchema],
        required: false
    },

    question25: {
        type: [questionSchema],
        required: false
    },

    question26: {
        type: [questionSchema],
        required: false
    },

    question27: {
        type: [questionSchema],
        required: false
    },

    question28: {
        type: [questionSchema],
        required: false
    },

    question29: {
        type: [questionSchema],
        required: false
    },

    question30: {
        type: [questionSchema],
        required: false
    }
});

mongoose.model( 'Round', roundSchema );