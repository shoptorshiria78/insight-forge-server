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


  router.get('/myjob', async (req, res) => {
    try {
      const email = req?.query?.email;
      const query = { userEmail: email }
      // console.log('hello goooooooooo',query);
      const result = await JobData.find(query)
      res.send(result)

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

 router.post('/job', async (req, res) => {
    try{
    const instance = new JobData(req.body);
    console.log(instance)
    const savedInstance = await instance.save();
    console.log('job post successfully:',savedInstance);
    res.send(savedInstance)
    } catch
        (error) {
            
            console.error('Error saving job data:', error.message);
          }
    
})  

router.delete('/job/:id', async (req, res) => {

  try {
      const result = await JobData.deleteOne({ _id: req.params.id });
      res.send(result);
  }
  catch (error) {
      console.error('Error deleting data:', error.message);
  }

})


module.exports = router

