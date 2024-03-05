// const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema.Types
const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
   
    review: {
        type: String
    },

    rating: {
        type: Number,
    },
  
    
});

const ReviewData = model('review', ReviewSchema);

module.exports = ReviewData