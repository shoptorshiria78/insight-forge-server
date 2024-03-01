const mongoose = require("mongoose")

const SubmissionSchema = new mongoose.Schema(
    {
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