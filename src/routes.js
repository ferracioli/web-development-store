const express = require("express");
const routes = express.Router();

const UserController = require("./backend/controller/UserController");

// Rotas exclusivas da API, são usadas para determinar quais operações serão feitas na base de dados
routes.get("/getUser", UserController.index);
routes.post("/postUser", UserController.store);
routes.put("/putUser", UserController.put);

module.exports = routes;