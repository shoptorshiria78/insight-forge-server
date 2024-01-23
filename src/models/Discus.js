const {Schema, model} = require('mongoose');

const DiscusSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type:String
    },
    category: {
        type: String
    }
});

const DiscusData = model('discus', DiscusSchema);

module.exports = DiscusData