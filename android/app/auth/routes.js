const express = require ('express');
const PostsController=require("./controller/Posts");
const bp = require('body-parser')
const router = express.Router();

router.post('/posts/create',PostsController.createPost);
router.get('/posts',PostsController.getPost)

router.get('/',(req,res)=>{
    res.send("ola ");
})





module.exports = router