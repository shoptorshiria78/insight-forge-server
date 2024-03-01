const express = require('express');
const DiscusData = require('../../models/Discus');
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');
const UserData = require('../../models/User');


router.get('/allDiscus', async (req, res) => {

})

// get resent data
router.get('/resentDiscus', async (req, res) => {
    const comments = 'comments'
    const result = await DiscusData.find().sort({ _id: -1 })
    // console.log(result)
    res.send(result)
})

//find data by id
router.get('/discuss/:id', async (req, res) => {
    const id = req.params.id
    const result = await DiscusData.findById(id)
    // console.log(result)
    res.send(result)
})

//find data by user
router.get('/myDiscuss', verifyToken, async (req, res) => {
    try {
      const email = req.query.email;
      const query = { email: email }
      const result = await DiscusData.find(query).sort({_id: -1})
      res.send(result)
    }
    catch
    (error) {
      // Handle any errors that occurred during the save operation
      console.error('Error saving blog data:', error.message);
    }
  })

router.delete('/allDiscussDelete/:id', async (req, res) => {

    try {
        // const id = req.params.id;
        // const filter = { _id: new ObjectId(id) };
        const result = await DiscusData.deleteOne({ _id: req.params.id });
        res.send(result);
    }
    catch (error) {
        console.error('Error deleting data:', error.message);
    }

})


router.post('/discus', async (req, res) => {
    try {
        const instance = new DiscusData(req.body);
        console.log(req.body.userId)
        const savedInstance = await instance.save();

        // console.log('Data saved successfully:', savedInstance);
        res.send(savedInstance)
    } catch
    (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }

})

router.put('/questionLike', verifyToken, async (req, res) => {
    try {
        const result = DiscusData.findByIdAndUpdate(req.body.postedId, {
            $push: { likes: req.body.postId }
        }, {
            new: true
        }).exec()

        const notification = {
            text: 'has like your question.',
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPhoto: req.body.userPhoto,
            postedId: req.body.postedId,
        }        

        const athor = UserData.findOne({userId: req.body.athorId})
        const athorResult = UserData.findByIdAndUpdate(req.body.athorId, {
            $push: { notifications: notification }
        }, {
            new: true
        }).exec()

        res.send({ message: 'post like successful' })
    } catch
    (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }
})




router.put('/postAnswer', verifyToken, async (req, res) => {
    try {
        const comment = {
            text: req.body.text,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPhoto: req.body.userPhoto,
            postedId: req.body.postedId,
        }
        const notification = {
            text: 'has answered your question.',
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPhoto: req.body.userPhoto,
            postedId: req.body.postedId,
        }

        const result = DiscusData.findByIdAndUpdate(req.body.postedId, {
            $push: { comments: comment }
        }, {
            new: true
        }).exec()

        const athor = UserData.findOne({ userId: req.body.athorId })
        const athorResult = UserData.findByIdAndUpdate(req.body.athorId, {
            $push: { notifications: notification }
        }, {
            new: true
        }).exec()

        res.send({ message: 'forbidden access' })
    } catch
    (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }
})



module.exports = router