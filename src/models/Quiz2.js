//const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const quizSchema = new Schema({
   category:{
        type: String
   },
    question: {
        type: String
    },
    option1: {
        type: String
    },
    option2: {
        type: String
    },
    option3: {
        type: String
    },
    option4: {
        type: String
    },
    correctAnswer: {
      type: String
    },
   

});

const QuizData = model('quiz4', quizSchema);

module.exports = QuizData
