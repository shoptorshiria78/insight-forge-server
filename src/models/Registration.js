const { ObjectId } = require("mongodb");
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
    team: {
        type: String
    },
    phone: {
        type: String
    },
    category: {
        type: String
    },
    title: {
        type: String
    },
    totalPrice: {
        type: Number
    },
    description: {
        type: String
    },
    currency: {
        type: String
    },
    address: {
        type: String
    },
    id: [{ type: ObjectId, ref: 'hackathonData' }],

    order: [{

        name: String,
        email: String,
        team: String,
        phone: String,
        category: String,
        title: String,
        totalPrice: String,
        priceMoney:String,
        description: String,
        currency: String,
        address: String

    }]
,
    transactionId: {
        type: String
    },
    paidStatus: {
        type: String
    }


})

const RegisterData = model('register', RegistrationSchema)
module.exports = RegisterData;