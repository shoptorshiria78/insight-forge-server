const express = require('express');
const ConversationData = require('../../models/conversation')
const router = express.Router();

// new conversation

router.post('/conversation', async(req, res)=>{

    const newConversation = new ConversationData({
        members: [req.body.senderId, req.body.receiverId],
    })
    try{

        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation)

    }catch(err){
        res.status(500).json(err)
    }
})

// conversation of a user

router.get('/conversation/:userId', async(req, res)=>{
    try{
        console.log("conversation id",req.params.userId)
        const conversation = await ConversationData.find({
            members: { $in: [req.params.userId]}
        });
        console.log("conversation",conversation)
        res.send(conversation);

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router