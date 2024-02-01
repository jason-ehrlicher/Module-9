"use strict";
const Models = require("../models");

const addLike = (data, res) => {
  Models.Like.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const removeLike = (req, res) => {
  Models.Like.destroy({ where: { postID: req.params.postID, userID: req.params.userID } })
    .then((data) => {
      if (data === 0) {
        res.send({ result: 404, message: "Like not found" });
      } else {
        res.send({ result: 200, data: "Like removed successfully" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  addLike,
  removeLike,
};
