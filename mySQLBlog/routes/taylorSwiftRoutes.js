const express = require('express');
const router = express.Router();
const Controllers = require("../controllers");

// Get all Taylor Swift albums
// http://localhost:8081/api/taylor-swift/albums
router.get("/albums", (req, res) => {
    console.log("Accessing Taylor Swift albums route");
  Controllers.taylorSwiftController.getAlbums(req, res);
});

// router.get("/albums", (req, res) => {
//   res.json({ message: "Taylor Swift API route is working" });
// });

// Get songs in a specific Taylor Swift album
// http://localhost:8081/api/taylor-swift/albums/:albumID
router.get("/albums/:albumID", (req, res) => {
  Controllers.taylorSwiftController.getSongsInAlbum(req, res);
});

// Get lyrics for a specific Taylor Swift song
// http://localhost:8081/api/taylor-swift/lyrics/:songID
router.get("/lyrics/:songID", (req, res) => {
  Controllers.taylorSwiftController.getLyricsForSong(req, res);
});

module.exports = router;