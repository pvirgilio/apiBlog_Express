const express = require("express");
const cors = require("cors");
function setupMiddlewares(app) {
  //* Analisa corpos de solicitação JSON.
  app.use(express.json({ limit: "50mb" }));
  app.use(cors());

  //* Analisa corpos de solicitação codificados em URL.
  app.use(express.urlencoded({ extended: true }));

  //* Configuração do dotenv
  require("dotenv").config();
}

module.exports = { setupMiddlewares };
