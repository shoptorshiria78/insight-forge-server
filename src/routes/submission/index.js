const express = require('express');
const SubmissionData = require("../../models/Submission")
const router = express.Router();

router.post('/submission', async(req,res)=>{
    try{
        const instance = new SubmissionData(req.body);
        const savedInstance = await instance.save();
        console.log('Data saved successfully:', savedInstance);
        res.send(savedInstance)

    } catch (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }
})

router.get('/allSubmission', async(req, res)=>{
    try{
        const result = await SubmissionData.find()
        // console.log(result)
        res.send(result)
    }catch (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }
})

// router.delete('/hackathonDelete/:id', async (req, res) => {

//     try {
//         // console.log(req.params.id)
//         // const id = req.params.id;
//         // const filter = { _id: new ObjectId(id) };
//         const result = await HackathonData.deleteOne({_id:req.params.id});
//         res.send(result);
//     }
//     catch(error){
//         console.error('Error deleting data:', error.message);
//     }

// })

module.exports = router