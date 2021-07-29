const express = require("express");
const routes = express.Router();

const UserController = require("./backend/controller/UserController");

routes.get("/getUser", UserController.index);
routes.post("/postUser", UserController.store);
routes.put("/putUser", UserController.put);

module.exports = routes;