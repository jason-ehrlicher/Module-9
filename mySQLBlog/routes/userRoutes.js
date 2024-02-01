const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// http://localhost: 8081/api/users - GET all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// http://localhost: 8081/api/users/create - Post create new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

// http://localhost: 8081/api/users/<id> - PUT update by user by id
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// http://localhost: 8081/api/users/<id> - DELETE destroys by user by id
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
