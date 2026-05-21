// src/routes/formularios.js
var express = require("express");
var router = express.Router();
var formularioController = require("../controllers/formularioController");

router.post("/cadastrarResposta", function (req, res) {
    formularioController.cadastrarResposta(req, res);
});

module.exports = router;