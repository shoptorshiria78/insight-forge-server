const express = require('express');
const UserData = require("../../models/User")
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');

router.get('/users/recruiter/:email',verifyToken, async (req, res) => {

    const email = req.params.email;
      if (email !== req.decode.uEmail) {
        return res.status(403).send({ message: 'forbidden access' })
      }
      const query = { uEmail: email };
    const user = await UserData.find(query)
    let recruiter = false;
    if (user) {
        recruiter = user[0]?.role === 'recruiter';
    }
    res.send({ recruiter })
})
module.exports = router