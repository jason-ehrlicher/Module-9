"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");




async function init() {
  await User.sync(); 
  await Post.sync();
  await Comment.sync();
  await Like.sync();

}

init();

module.exports = {
  User, 
  Post,
  Comment, 
  Like
}
