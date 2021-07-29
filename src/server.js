const express = require("express");
const db = require("./backend/config");
const mongoose = require("mongoose");

const path = require("path");

// Classe que gerencia o funcionamento da página
class App {
  constructor() {
    console.log("Entrou no construtor do app");
    this.express = express();
    
    this.database();
    this.middlewares();
    this.routes();
    
    // Usa o express apra rodar o app na porta 8080
    this.express.listen(8080, () => console.log(`API rodando na porta 8080`));

    // Configuração do caminho relativo para a paginação
    this.express.use("/frontend", express.static(path.resolve(__dirname, "frontend")));
    
    this.express.get("/*", (req, res) => {
        res.sendFile(path.resolve("src", "index.html"));
    });
  }
  
  // Usa o link da base local para fazer a comexão com mongoose (usaremos isso para as APIs)
  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }
  
  middlewares() {
    this.express.use(express.json());
  }
  
  // O express é usado para o roteamento da página
  routes() {
    this.express.use(require("./routes"));
  }
}
const app = new App;