const express = require('express');
const UserData = require('../../models/User');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { ObjectId } = require('mongodb');
// const verifyToken = require('../../middleware/verifyToken')


router.get('/allUsers', async (req, res) => {
    const result = await UserData.find()
    console.log(result)
    res.send(result)
})

// router.get('/latestUsers', async (req, res) => {
//     const result = await UserData.find().sort({_id: -1})
//     console.log(result)
//     res.send(result)
// })

router.post('/users', async (req, res) => {
    const user = req.body
    console.log(user)
    const query = { uEmail: user.uEmail };
    // console.log(query)

    const existingUser = await UserData.findOne(query)
    // console.log("existingUser", existingUser)
    if (existingUser) {
        return res.send({ message: 'user already exists' })
    }

    try {

        const instance = new UserData(req.body);

        const savedInstance = await instance.save();
        // console.log('Data saved successfully:', savedInstance);
        res.send(savedInstance,)
    } catch
    (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }

})

router.post('/jwt', async (req, res) => {
    const user = req.body
    // console.log("user 123456", user)
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    // console.log("token", token)
    res.send(token)
})

router.delete('/allUserDelete/:id', async (req, res) => {

    try {
        // console.log(req.params.id)
        // const id = req.params.id;
        // const filter = { _id: new ObjectId(id) };
        const result = await UserData.deleteOne({_id:req.params.id});
        res.send(result);
    }
    catch(error){
        console.error('Error deleting data:', error.message);
    }

})

module.exports = router