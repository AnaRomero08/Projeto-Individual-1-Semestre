// src/controllers/dashboardSemPetController.js
var dashboardSemPetModel = require("../models/dashboardSemPetModel");

function buscarKpis(req, res) {
    // Dispara as duas queries de KPI em paralelo
    Promise.all([
        dashboardSemPetModel.buscarVidasTransformadas(),
        dashboardSemPetModel.buscarIndiceFelicidade()
    ])
    .then(function (resultados) {
        res.json({
            vidas_transformadas:  resultados[0][0].vidas_transformadas,
            indice_felicidade:    resultados[1][0].indice_felicidade
        });
    })
    .catch(function (erro) {
        console.log("Erro ao buscar KPIs:", erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarStatusAdocao(req, res) {
    dashboardSemPetModel.buscarStatusAdocao()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar status de adoção:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarKpis,
    buscarStatusAdocao
};