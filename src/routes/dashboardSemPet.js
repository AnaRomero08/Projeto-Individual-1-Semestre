// src/routes/dashboardSemPet.js
var express = require("express");
var router  = express.Router();

var dashboardSemPetController = require("../controllers/dashboardSemPetController");

// GET /dashboardSemPet/kpis
router.get("/kpis", function (req, res) {
    dashboardSemPetController.buscarKpis(req, res);
});

// GET /dashboardSemPet/statusAdocao
router.get("/statusAdocao", function (req, res) {
    dashboardSemPetController.buscarStatusAdocao(req, res);
});

module.exports = router;