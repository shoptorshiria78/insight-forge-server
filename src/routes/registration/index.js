const express = require('express');
const RegisterData = require("../../models/Registration")
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');

router.post('/register', async(req, res)=>{
    try{
        const instance = new RegisterData(req.body);
        const savedInstance = await instance.save();
        console.log('Data saved successfully:', savedInstance);
        res.send(savedInstance)

    } catch (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }
})

module.exports = router