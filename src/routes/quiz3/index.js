const express = require('express');
const QuizData = require('../../models/Quiz');
const router = express.Router();


  router.get('/quiz3', async (req, res) => {
    try {
      const result = await QuizData.find();
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

 router.post('/quiz3', async (req, res) => {
    try{
    const instance = new QuizData(req.body.formData);
    const savedInstance = await instance.save();
    console.log('job post successfully:',savedInstance);
    res.send(savedInstance)
    } catch
        (error) {
            
            console.error('Error saving job data:', error.message);
          }
    
})  

module.exports = router




// const express = require('express');
// const QuizData = require('../../models/Quiz'); // Import your Mongoose model
// const router = express.Router();

// // POST route to save quiz data
// router.post('/quiz3', async (req, res) => {
//     const { category, questions } = req.body; // Destructure category and questions from request body

//     const quiz = new QuizData({ category, questions }); // Create a new instance of QuizData

//     try {
//         const savedQuiz = await quiz.save(); // Save the quiz data to the database
//         res.status(201).json(savedQuiz); // Send the saved quiz data as a JSON response
//     } catch (error) {
//         console.error('Error saving quiz data:', error.message);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // GET route to retrieve all quiz data
// router.get('/quiz3', async (req, res) => {
//     try {
//         const quizData = await QuizData.find(); // Retrieve all quiz data from the database
//         res.json(quizData); // Send the quiz data as a JSON response
//     } catch (error) {
//         console.error('Error retrieving quiz data:', error.message);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// module.exports = router;
