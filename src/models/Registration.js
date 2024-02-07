const mongoose = require("mongoose")
const { Schema, model } = require('mongoose');

const RegistrationSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    photo: {
        type: String
    },
    teamName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    category: {
        type: String
    },
})

const RegisterData = model('register',RegistrationSchema )
module.exports = RegisterData;