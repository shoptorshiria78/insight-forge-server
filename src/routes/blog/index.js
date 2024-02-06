const express = require('express');
const BlogData = require('../../models/Blog');
const router = express.Router();

 
  router.get('/allBlogs', async (req, res) => {
     const category = req.query.search;
     console.log(category)

    try{
       if(category){
        const searchResult = await BlogData.find({category: new RegExp(category,'i') });
        console.log(searchResult)
        res.send(searchResult)
        
       }else{
        const result = await BlogData.find()
        console.log(result)
        res.send(result)

       }

    } catch(error){
      console.error('Error get blog data')
    }
    
})

router.get('/blog/:id', async(req,res)=>{
  const blogId ={_id:req.params.id};
  console.log(blogId)
  try{
    const result = await BlogData.findOne(blogId);
    console.log(result)
        res.send(result)
  }catch(error) {
    // Handle any errors that occurred during the save operation
    console.error('Error id blog data:', error.message);
  }


} )


router.get('/recentPost', async(req,res)=>{
  const result = await BlogData.find();
  const recent= result.slice(2,5)
        console.log(recent)
        res.send(recent)


})


 router.post('/blog', async (req, res) => {
    try{
    const instance = new BlogData(req.body);
    const savedInstance = await instance.save();
    console.log('Blog post successfully:',savedInstance);
    res.send(savedInstance)
    } catch
        (error) {
            // Handle any errors that occurred during the save operation
            console.error('Error saving blog data:', error.message);
          }
    
})  

  router.post('/allBlog', async (req, res) => {
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
    
})  


module.exports = router


