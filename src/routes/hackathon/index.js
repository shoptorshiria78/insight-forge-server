const express = require('express');
const HackathonData = require('../../models/HackathonCreate')
const router = express.Router();

router.post('/hackathonInfo', async(req,res)=>{
    try{
        const instance = new HackathonData(req.body);
        const savedInstance = await instance.save();
        console.log('Data saved successfully:', savedInstance);
        res.send(savedInstance)

    } catch (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }
})

router.get('/allHackathon', async(req, res)=>{
    try{
        const result = await HackathonData.find()
        // console.log(result)
        res.send(result)
    }catch (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }
})

router.delete('/hackathonDelete/:id', async (req, res) => {

    try {
        // console.log(req.params.id)
        // const id = req.params.id;
        // const filter = { _id: new ObjectId(id) };
        const result = await HackathonData.deleteOne({_id:req.params.id});
        res.send(result);
    }
    catch(error){
        console.error('Error deleting data:', error.message);
    }

})

module.exports = router