const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    nome: {
      type: String,
      required: true
    },
    cargo: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    logradouro: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
    complemento: {
      type: String
    },
    telefone: {
      type: String,
      required: true
    },
    hash_senha: {
      type: String,
      required: true
    },
    data_cadastro: {
      type: Date,
      required: true
    }
  },
  { 
      collection : 'User' 
  }
);

module.exports = mongoose.model("User", UserSchema);