const express = require('express');
const ReviewData = require('../../models/Review');
const router = express.Router();


// get all job data
  router.get('/review', async (req, res) => {
    try {
      const result = await ReviewData.find();
    //   console.log(result);
      res.send(result);
    } catch (error) {
    //   console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // Sending Data

 router.post('/review', async (req, res) => {
    try{
    const instance = new ReviewData(req.body);
    // console.log(instance)
    const savedInstance = await instance.save();
    console.log('review post successfully:',savedInstance);
    res.send(savedInstance)
    } catch
        (error) {
            
            console.error('Error saving job data:', error.message);
          }
    
})  




module.exports = router

