const axios = require("axios");

const taylorSwiftAPI = axios.create({
  baseURL: "https://taylor-swift-api.sarbo.workers.dev",
});

const getAlbums = async (req, res) => {
    try {
      const response = await taylorSwiftAPI.get("/albums");
      res.json({ result: 200, data: response.data });
    } catch (error) {
      console.error("Error fetching Taylor Swift albums:", error);
      res.status(500).json({ result: 500, error: error.message });
    }
  };

const getSongsInAlbum = async (req, res) => {
  try {
    const { albumID } = req.params;
    const response = await taylorSwiftAPI.get(`/albums/${albumID}`);
    res.send({ result: 200, data: response.data });
  } catch (error) {
    console.log(error);
    res.status(404).send({ result: 404, error: "Album not found" });
  }
};

const getLyricsForSong = async (req, res) => {
  try {
    const { songID } = req.params;
    const response = await taylorSwiftAPI.get(`/lyrics/${songID}`);
    res.send({ result: 200, data: response.data });
  } catch (error) {
    console.log(error);
    res.status(404).send({ result: 404, error: "Lyrics not found" });
  }
};

module.exports = {
  getAlbums,
  getSongsInAlbum,
  getLyricsForSong,
};
