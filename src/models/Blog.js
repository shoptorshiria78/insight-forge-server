const {Schema, model} = require('mongoose');

    // Comment schema
const commentSchema = new Schema({
      
      author: String,
      date: String,
      text: String,
    });
    
    // Blog post schema
    const blogSchema = new Schema({
      title: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      name: String, // Assuming 'name' is the author's name
      date: String,
      details: String,
      rating: Number,
      comments: [commentSchema], // Embedding comments within the blog post
    });
    
    // Create models based on the schemas
    const Blog = model('blog', blogSchema);
    //const Comment = model('Comment', commentSchema);
    
    // Export the models
    module.exports = Blog ;