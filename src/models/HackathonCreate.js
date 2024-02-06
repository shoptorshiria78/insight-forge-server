const { Schema, model } = require('mongoose');

const HackathonCreateSchema = new Schema({
    title:{
       
        type:String
    },
    description:{
      
        type:String
    },
    totalPrice:{
        type: Number
    },
    category:{
        type: String
    }
})

const HackathonData = model("hackathonData", HackathonCreateSchema);
module.exports = HackathonData;