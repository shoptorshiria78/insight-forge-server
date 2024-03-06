const mongoose = require("mongoose")

const SubmissionSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type: String
        },
        title:{
            type: String
        },
        team:{
            type: String
        },
        category:{
            type: String
        },
        totalPrice:{
            type: String
        },
        submission:{
            type: String
        },
        registerId:{
            type: String
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Submission", SubmissionSchema)