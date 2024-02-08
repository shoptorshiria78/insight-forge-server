const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

    // Comment schema
const commentSchema = new Schema({
      
      userName: String,
      userPhoto: String,
      userEmail: String,
      text: String,
      postedId: { type: ObjectId, ref: 'users' }
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
      likes:[{ type: ObjectId, ref: 'users' }],
      name: String, // Assuming 'name' is the author's name
      userImg: String,
      userEmail: String,
      details: String,
      comments: [commentSchema], // Embedding comments within the blog post
    },
    { timestamps: true });
    
    // Create models based on the schemas
    const Blog = model('blog', blogSchema);
    //const Comment = model('Comment', commentSchema);
    
    // Export the models
    module.exports = Blog ;