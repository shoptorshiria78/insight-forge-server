const express = require('express');
const MessageData = require('../../models/Message')
const router = express.Router();

// new Message post

router.post('/message', async(req, res)=>{

    const newMessage = new MessageData(req.body)
    try{

        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)

    }catch(err){
        res.status(500).json(err)
    }
})

// get the message

router.get('/message/:conversationId', async(req, res)=>{
    try{

        const messages = await MessageData.find({
            conversationId:req.params.conversationId
        });

        res.status(200).json(messages)

    }catch(err){
        res.status(500).json(err)
    } 
})


module.exports = router