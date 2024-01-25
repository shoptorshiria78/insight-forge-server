const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const { Schema, model } = require('mongoose');

const DiscusSchema = new Schema({
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
    likes: [{type:ObjectId, ref:'users'}]
});

const DiscusData = model('discus', DiscusSchema);

module.exports = DiscusData