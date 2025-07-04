const express = require("express");
const UserController = require("../controllers/UserController");
const route = express.Router();

route.post("/addUser", UserController.addUser);
route.get("/getAllUser", UserController.getAllUser);
route.get("/getUser/:id", UserController.getUserById);
route.post("/deleteUser/:id", UserController.deleteUser);

module.exports = route;
