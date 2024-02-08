const express = require('express');
const UserData = require("../../models/User")
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');

router.get('/users/admin/:email',verifyToken, async (req, res) => {

    const email = req.params.email;
    console.log(req.decode)
      if (email !== req.decode.uEmail) {
        return res.status(403).send({ message: 'forbidden access' })
      }
      const query = { uEmail: email };
    const user = await UserData.find(query)
    let admin = false;
    // console.log(user)
    if (user) {
      admin = user[0]?.role === 'admin';
    }
    res.send({ admin })
    
   
})

module.exports = router