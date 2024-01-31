const mongoose = require("mongoose")

const Schema = mongoose.Schema

const likeSchema = new mongoose.Schema({
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    createdAt: { type: Date, default: Date.now }
});

// This ensures that a user can only like a post once
likeSchema.index({ post: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("Like", likeSchema)