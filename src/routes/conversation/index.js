const express = require('express');
const ConversationData = require('../../models/conversation')
const userData = require('../../models/User')
const router = express.Router();

// new conversation

router.post('/conversation', async (req, res) => {
    const senderId =  req.body.senderId ;
    const receiverId = req.body.receiverId;
    console.log(senderId,receiverId)
    
    const existingConversation = await ConversationData.find({
        members: { $all: [senderId, receiverId] }
    });
   
    console.log("console.log from existingconverstation",existingConversation)
    // console.log("console.log from existingconverstation",existingConversation.length)

    if (!existingConversation?.length ) {
        const newConversation = new ConversationData({
            members: [req.body.senderId, req.body.receiverId],
        })

        try {

            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation)

        } catch (err) {
            res.status(500).json(err)
        }
    }
    else{
        res.send({message:"Conversation already exist "}) 
    }


})

// conversation of a user

router.get('/conversation/:userId', async (req, res) => {
    try {
        console.log("conversation id", req.params.userId)
        const conversation = await ConversationData.find({
            members: { $in: [req.params.userId] }
        });
        console.log("conversation", conversation)
        res.send(conversation);

    } catch (err) {
        res.status(500).json(err)
    }
})

// search for user

router.get('/searchUsers', async (req, res) => {
    const uName = req.query.search;
    console.log(uName)
    try {

        const searchResult = await userData.findOne({ uName: new RegExp(uName, 'i') });
        console.log(searchResult)
        res.send(searchResult)

    } catch (error) {
        console.error('Error userName not found')
    }
})
module.exports = router