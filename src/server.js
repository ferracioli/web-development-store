const express = require("express");
const db = require("./backend/config");
const mongoose = require("mongoose");

const path = require("path");

class App {
  constructor() {
    console.log("Entrou no construtor do app");
    this.express = express();
    
    this.database();
    this.middlewares();
    this.routes();
    
    this.express.listen(8080, () => console.log(`API REST rodando na porta 8080`));
    
    /* Ensure any requests prefixed with /frontend will serve our "frontend/frontend" directory */
    this.express.use("/frontend", express.static(path.resolve(__dirname, "frontend")));
    
    /* Redirect all routes to our (soon to exist) "index.html" file */
    this.express.get("/*", (req, res) => {
        res.sendFile(path.resolve("src", "index.html"));
    });
  }
  
  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }
  
  middlewares() {
    this.express.use(express.json());
  }
  
  routes() {
    this.express.use(require("./routes"));
  }
}
const app = new App;

//------
