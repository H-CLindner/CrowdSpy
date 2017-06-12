var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({

    first:{
        type: "String",
        required: true
    },
    second:[{
        type: "String",
        required: false
    }],
    difficulty:{
        type: "String",
        required: true
    },
    userId:{
        type: "String",
        required: true
    }

});

mongoose.model( 'Question', questionSchema );