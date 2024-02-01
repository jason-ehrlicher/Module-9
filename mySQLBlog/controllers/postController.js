"use strict";
const Models = require("../models");

const getPosts = (res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const createPost = (data, res) => {
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePost = (req, res) => {
  Models.Post.update(req.body, { where: { postID: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  Models.Post.destroy({ where: { postID: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
