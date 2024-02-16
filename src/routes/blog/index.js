const express = require('express');
const BlogData = require('../../models/Blog');
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();


router.get('/allBlogs', async (req, res) => {
  const category = req.query.search;
  console.log(category)
  try {
    if (category) {
      const searchResult = await BlogData.find({ category: new RegExp(category, 'i') });
      console.log(searchResult)
      res.send(searchResult)
    } else {
      const result = await BlogData.find()
      console.log(result)
      res.send(result)
    }
  } catch (error) {
    console.error('Error get blog data')
  }
})
router.get('/blog/:id', async (req, res) => {
  const blogId = { _id: req.params.id };
  //console.log(blogId)
  try {
    const result = await BlogData.findOne(blogId);
    console.log(result)
    res.send(result)
  } catch (error) {
    // Handle any errors that occurred during the save operation
    console.error('Error id blog data:', error.message);
  }
})

router.get('/recentPost', async (req, res) => {
  const result = await BlogData.find();
  const recent = result.slice(2, 5)
  //console.log(recent)
  res.send(recent)
})
router.post('/blog', async (req, res) => {
  try {
    const instance = new BlogData(req.body);
    const savedInstance = await instance.save();
    console.log('Blog post successfully:', savedInstance);
    res.send(savedInstance)
  } catch
  (error) {
    // Handle any errors that occurred during the save operation
    console.error('Error saving blog data:', error.message);
  }
})
router.post('/allBlog', async (req, res) => {
  try {
    const instance = req.body;
    const savedInstance = await BlogData.insertMany(instance);
    console.log('Blog post successfully:', savedInstance);
    res.send(savedInstance)
  } catch
  (error) {
    // Handle any errors that occurred during the save operation
    console.error('Error saving blog data:', error.message);
  }
})

router.get('/myBlog', async (req, res) => {
  try {
    const email = req.query.email;
    const query = { userEmail: email }
    const result = await BlogData.find(query)
    res.send(result)
  }
  catch
  (error) {
    // Handle any errors that occurred during the save operation
    console.error('Error saving blog data:', error.message);
  }
})
//  Comments post 

router.put('/commentBlog', async (req, res) => {
  try {
    const comment = {
      text: req.body.text,
      userName: req.body.userName,
      userPhoto: req.body.userPhoto,
      userEmail: req.body.userEmail,
      postedId: req.body.postedId,
    }
    //console.log(comment)
    const result = BlogData.findByIdAndUpdate(req.body.postedId, {
      $push: { comments: comment }
    }, {
      new: true
    }).exec()
    res.send({ message: 'comment is done' })
  } catch
  (error) {
    // Handle any errors that occurred during the save operation
    console.error('Error saving data:', error.message);
  }
})
//  Like APi  
router.put('/blogLike', verifyToken, async (req, res) => {
  try {
    const likeId = req.body.postId;
    //console.log(likeId)
    const result = BlogData.findByIdAndUpdate(likeId, {
      $push: { likes: req.body.postedId }
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

router.delete('/deleteMyBlog/:id', async (req, res) => {

  try {
      const result = await BlogData.deleteOne({ _id: req.params.id });
      res.send(result);
  }
  catch (error) {
      console.error('Error deleting data:', error.message);
  }

})

module.exports = router