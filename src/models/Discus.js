const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const { Schema, model } = require('mongoose');

const DiscusSchema = new Schema({
    userId: {
        type: ObjectId, ref: 'users'
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    photo: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    likes: [{ 
        type: ObjectId, ref: 'users'
     }],
    comments: [{
        text: String,
        userName: String,
        userEmail: String,
        userPhoto: String,
        postedId: { type: ObjectId, ref: 'users' },
        date: {
            type: Date,
            default: Date.now,
        }
    }]
},
{ timestamps: true });

const DiscusData = model('discus', DiscusSchema);

module.exports = DiscusData