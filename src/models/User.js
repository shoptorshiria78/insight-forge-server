const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    uEmail: {
        type: String
    },
    uName: {
        type: String
    },
    uPhoto: {
        type: String,
        Default: 'no photo'
    },
    role: {
        type: String
    },
    notifications: [{
        text: String,
        userName: String,
        userEmail: String,
        userPhoto: String,
        postedId: { type: ObjectId, ref: 'users' },
        athorId: { type: ObjectId, ref: 'users' },
        date: {
            type: Date,
            default: Date.now,
        }
    }],
    seeNotifications: {
        type: Array,
        default: []
    }

});

const UserData = model('users', UserSchema);

module.exports = UserData