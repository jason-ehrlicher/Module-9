const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// Get all posts
// http://localhost:8081/api/posts/
router.get('/', (req, res) => {
  Controllers.postController.getPosts(res);
});

// Create a new post
// http://localhost:8081/api/posts/create
router.post('/create', (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// Update an existing post
// http://localhost:8080/api/posts/<:id>
router.put('/:id', (req, res) => {
  Controllers.postController.updatePost(req, res);
});

// Delete a post
// http://localhost:8080/api/posts/<:id>
router.delete('/:id', (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
