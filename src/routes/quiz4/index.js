const express = require('express');
const QuizData = require('../../models/Quiz2');
const router = express.Router();


  router.get('/quiz4', async (req, res) => {
    try {
      const result = await QuizData.find();
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // router.get('/quiz3/:category', async (req, res) => {
  //   try {
  //     const { category } = req.params;
  //     const result = await QuizData.find({ category: category });
  //     console.log(result);
  //     res.send(result);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  

 router.post('/quiz4', async (req, res) => {
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