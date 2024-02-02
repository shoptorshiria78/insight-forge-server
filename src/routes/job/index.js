const express = require('express');
const JobData = require('../../models/Job');
const router = express.Router();


  router.get('/job', async (req, res) => {
    try {
      const result = await JobData.find();
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

 router.post('/job', async (req, res) => {
    try{
    const instance = new JobData(req.body.formData);
    const savedInstance = await instance.save();
    console.log('job post successfully:',savedInstance);
    res.send(savedInstance)
    } catch
        (error) {
            
            console.error('Error saving job data:', error.message);
          }
    
})  

module.exports = router

