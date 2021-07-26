const express = require("express");
const routes = express.Router();

const UserController = require("./backend/controller/UserController");

routes.get("/user", UserController.index);
routes.post("/user", UserController.store);

module.exports = routes;