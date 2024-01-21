const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use(cors());





const mongoAtlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ssnfvav.mongodb.net/?retryWrites=true&w=majority`;


    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri)
        .then(()=>console.log("connecting to mongoose"))
        .catch(err=>console.log(err))

 
    

    app.get('/', async (req, res) => {
        res.send("server is ready to work")
      })
      
      app.listen(port, () => {
        console.log(`server is running on port:${port}`)
        
      })