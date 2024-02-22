//const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const quizSchema = new Schema({
   
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

const QuizData = model('quiz3', quizSchema);

module.exports = QuizData



