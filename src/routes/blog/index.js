const express = require('express');
const BlogData = require('../../models/Blog');
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');

/* router.get('/allBlog', async (req, res) => {
   try {
     const result = await BlogData.find();
     console.log(result);
     res.send(result);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });  */

/* search category */
router.get('/allBlog', async (req, res) => {
  const category = req.query.search;
  console.log(category)
  try {
    const result = await BlogData.find({ category: new RegExp(category, 'i') });
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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

/* router.post('/allBlog', async (req, res) => {
   try{
   const instance =req.body;
   const savedInstance = await BlogData.insertMany(instance);
   console.log('Blog post successfully:',savedInstance);
   res.send(savedInstance)
   } catch
       (error) {
           // Handle any errors that occurred during the save operation
           console.error('Error saving blog data:', error.message);
         }
   
})  */

router.get('/myBlog', verifyToken, async (req, res) => {
try{
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


module.exports = router

