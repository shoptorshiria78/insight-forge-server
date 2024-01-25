const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');


// router
const discusRoutes = require('./src/routes/discus')
<<<<<<< HEAD
const blogRoutes = require('./src/routes/blog')
=======
const userRoutes = require('./src/routes/user')
>>>>>>> 3b5e59c85dc868b7b0f119496d7039c08c7ec7f2


//middleware
app.use(express.json());
app.use(cors());


const mongoAtlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ssnfvav.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`;


// Connect to the MongoDB cluster
mongoose.connect(
  mongoAtlasUri)
  .then(() => console.log("connecting to mongoose"))
  .catch(err => console.log(err))


<<<<<<< HEAD
    app.use(discusRoutes)
    app.use(blogRoutes)

      
      app.listen(port, () => {
        console.log(`server is running on port:${port}`)
        
      })
=======
//discus Routes
app.use(discusRoutes)

//user routes
app.use(userRoutes)

app.listen(port, () => {
  console.log(`server is running on port:${port}`)

})
>>>>>>> 3b5e59c85dc868b7b0f119496d7039c08c7ec7f2
