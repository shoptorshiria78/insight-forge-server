const express = require('express');
const DiscusData = require('../../models/Discus');
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');


router.get('/allDiscus', async (req, res) => {
    const result = await DiscusData.find()
    console.log(result)
    res.send(result)
})

router.get('/discuss/:id', async (req, res) => {
    const id = req.params.id
    const result = await DiscusData.findById(id)
    console.log(result)
    res.send(result)
})

router.post('/discus', async (req, res) => {
    try {
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

router.put('/questionLike', verifyToken, async (req, res) => {
    try {
       const result = DiscusData.findByIdAndUpdate(req.body.postId, {
            $push: { likes: req.body.postId }
        }, {
            new: true
        }).exec()
        res.send({ message: 'forbidden access' })
    } catch
    (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }
})




module.exports = router