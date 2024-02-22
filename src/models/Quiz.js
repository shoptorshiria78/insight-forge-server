// const mongoose = require('mongoose');
// const { Schema, model } = require('mongoose');

// const quizSchema = new Schema({
//     category: {
//         type: String
//     },
//     question: {
//         type: String
//     },
//     options: [{
//         type: String
//     }
//     ],
//     correctAnswer: {
//       type: String
//     },
   

// });

// const QuizData = model('quiz3', quizSchema);

// module.exports = QuizData



const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String], 
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    }
});

const quizSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    questions: {
        type: [questionSchema], 
        required: true
    }
});

const QuizData = model('quiz3', quizSchema);

module.exports = QuizData;
