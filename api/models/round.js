var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var questionSchema = require('./question').schema;

var roundSchema = new mongoose.Schema({

    question1: {
        type: [questionSchema],
        required: true
    },

    question2: {
        type: [questionSchema],
        required: true
    },

    question3: {
        type: [questionSchema],
        required: true
    },

    question4: {
        type: [questionSchema],
        required: true
    },

    question5: {
        type: [questionSchema],
        required: true
    },

    question6: {
        type: [questionSchema],
        required: true
    },

    question7: {
        type: [questionSchema],
        required: true
    },

    question8: {
        type: [questionSchema],
        required: true
    },

    question9: {
        type: [questionSchema],
        required: true
    },

    question10: {
        type: [questionSchema],
        required: true
    },

    question11: {
        type: [questionSchema],
        required: true
    },

    question12: {
        type: [questionSchema],
        required: true
    },

    question13: {
        type: [questionSchema],
        required: true
    },

    question14: {
        type: [questionSchema],
        required: true
    },

    question15: {
        type: [questionSchema],
        required: true
    },

    question16: {
        type: [questionSchema],
        required: true
    },

    question17: {
        type: [questionSchema],
        required: true
    },

    question18: {
        type: [questionSchema],
        required: true
    },

    question19: {
        type: [questionSchema],
        required: true
    },

    question20: {
        type: [questionSchema],
        required: true
    },

    question21: {
        type: [questionSchema],
        required: true
    },

    question22: {
        type: [questionSchema],
        required: true
    },

    question23: {
        type: [questionSchema],
        required: true
    },

    question24: {
        type: [questionSchema],
        required: true
    },

    question25: {
        type: [questionSchema],
        required: true
    },

    question26: {
        type: [questionSchema],
        required: true
    },

    question27: {
        type: [questionSchema],
        required: true
    },

    question28: {
        type: [questionSchema],
        required: true
    },

    question29: {
        type: [questionSchema],
        required: true
    },

    question30: {
        type: [questionSchema],
        required: true
    }
});

mongoose.model( 'Round', roundSchema );