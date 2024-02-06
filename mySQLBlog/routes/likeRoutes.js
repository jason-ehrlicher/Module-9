const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// Add a like
router.post('/', (req, res) => {
  Controllers.likeController.addLike(req.body, res);
});

// Remove a like
// using POST ID and USER ID to identify a like to remove
router.delete('/:postID/:userID', (req, res) => {
  Controllers.likeController.removeLike(req, res);
});

// Fetch all likes
router.get('/', (req, res) => {
  Controllers.likeController.getLikes(req, res);
});


module.exports = router;
