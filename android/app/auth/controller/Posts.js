const Posts = require("../model/Posts")


exports.createPost = async (req , res) =>{ 
    const post = new Posts({
        useName:req.body.userName,
        passsword:req.body.passsword
    })
    try {
        const postsave = await post.save();
        res.json(postsave);
    }catch (error){
        console.log(error);
    }
}
exports.getPost = async(req , res) => {
    try{
        const posts= await Posts.find();
        console.log(posts);
        res.json(posts);
    }catch (error){
        res.send()
    }
}