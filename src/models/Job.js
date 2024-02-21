// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
  companyname: {
        type: String
    },
    logo: {
        type: String
    },
    jobtitle: {
        type: String
    },
    location: {
      type: String
  },
    description: {
        type: String
    },
    category: {
        type: String
    },
   

});

const JobData = model('job', jobSchema);

module.exports = JobData