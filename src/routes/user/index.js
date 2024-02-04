const express = require('express');
const UserData = require('../../models/User');
const router = express.Router();
const jwt = require("jsonwebtoken");


router.post('/users', async (req, res) => {
    const user = req.body
    console.log(user)
    const query = { uEmail: user.uEmail };
    // console.log(query)
    
    const existingUser = await UserData.findOne(query)
    // console.log("existingUser", existingUser)
    if (existingUser) {
        return res.send({message: 'user already exists'})
    }

    try {

        const instance = new UserData(req.body);

        const savedInstance = await instance.save();
        // console.log('Data saved successfully:', savedInstance);
        res.send(savedInstance, )
    } catch
    (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }

})

router.post('/jwt', async(req, res)=>{
    const user = req.body
    console.log("user 123456", user)
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    // console.log("token", token)
    res.send(token)
})


module.exports = router