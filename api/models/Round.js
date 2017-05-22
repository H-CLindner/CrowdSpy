var mongoose = require('mongoose');

var roundSchema = new mongoose.Schema({

    Question1: {
        type: Number,
        required: true
    },

    Question2: {
        type: String,
        required: true
    },

    Question3: {
        type: String,
        required: true
    },

    Question4: {
        type: String,
        required: true
    },

    Question5: {
        type: String,
        required: true
    },

    Question6: {
        type: String,
        required: true
    },

    Question7: {
        type: String,
        required: true
    },

    Question8: {
        type: Number,
        required: true
    },

    Question9: {
        type: String,
        required: true
    },

    Question10: {
        type: String,
        required: true
    },

    Question11: {
        type: String,
        required: true
    },

    Question12: {
        type: String,
        required: true
    },

    Question13: {
        type: String,
        required: true
    },

    Question14: {
        type: String,
        required: true
    }
//to be continued
});

mongoose.model( 'Round', roundSchema );