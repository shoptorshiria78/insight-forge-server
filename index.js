const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');


// router
const discusRoutes = require('./src/routes/discus')
const blogRoutes = require('./src/routes/blog')
const userRoutes = require('./src/routes/user')
const registerRoutes = require('./src/routes/registration')
const adminCheckRoutes = require('./src/routes/admin')
const recruiterCheckRoutes = require('./src/routes/recruiter')
const jobRoutes = require('./src/routes/job')
const HackathonCreateRoutes = require('./src/routes/hackathon')


//middleware
app.use(express.json());
app.use(cors());


const mongoAtlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ssnfvav.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`;


// Connect to the MongoDB cluster
mongoose.connect(
  mongoAtlasUri)
  .then(() => console.log("connecting to mongoose"))
  .catch(err => console.log(err))

//discus Routes
app.use(discusRoutes)
app.use(blogRoutes)

//register Routes
app.use(registerRoutes)

// hackathonCreateRoutes
app.use(HackathonCreateRoutes)

//user routes
app.use(userRoutes)
app.use(jobRoutes)

// admin check
app.use(adminCheckRoutes)
// recruiter check
app.use(recruiterCheckRoutes)

app.listen(port,() => {
  console.log(`server is running on port:${port}`)

})


