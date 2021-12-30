const mongoose = require("mongoose");

const { Schema } = mongoose;


const PostsSchema = new Schema({
  userName:  String,
  password: String
});

module.exports = mongoose.model("Posts",PostsSchema);
