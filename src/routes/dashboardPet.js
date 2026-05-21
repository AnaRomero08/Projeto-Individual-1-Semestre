var express = require("express");
var router = express.Router();

var dashboardPetController = require("../controllers/dashboardPetController");

router.get("/buscarDados/:idUsuario", function (req, res) {
    dashboardPetController.buscarDados(req, res);
});

router.get("/historico/:idUsuario", function (req, res) {
    dashboardPetController.buscarHistorico(req, res);
});

router.post("/registrarPeso", function (req, res) {
    dashboardPetController.registrarPeso(req, res);
});

module.exports = router;