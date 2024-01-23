const express = require('express');
const DiscusData = require('../../models/Discus');
const router = express.Router();


router.get('/allDiscus', async (req, res) => {
    const result = await DiscusData.find()
    console.log(result)
    res.send(result)
})

router.post('/discus', async (req, res) => {
    try{
    const instance = new DiscusData(req.body);
  
    const savedInstance = await instance.save();

    console.log('Data saved successfully:', savedInstance);
    res.send(savedInstance)
    } catch
        (error) {
            // Handle any errors that occurred during the save operation
            console.error('Error saving data:', error.message);
          }
    
})


module.exports = router