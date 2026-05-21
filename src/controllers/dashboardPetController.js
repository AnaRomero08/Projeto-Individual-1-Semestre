var dashboardPetModel = require("../models/dashboardPetModel");

function buscarDados(req, res) {

    var idUsuario = req.params.idUsuario;

    dashboardPetModel.buscarDados(idUsuario)
        .then(function (resultado) {

            res.json(resultado);

        }).catch(function (erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

function buscarHistorico(req, res) {

    var idUsuario = req.params.idUsuario;

    dashboardPetModel.buscarHistorico(idUsuario)
        .then(function (resultado) {

            res.json(resultado);

        }).catch(function (erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

function registrarPeso(req, res) {

    var peso = req.body.pesoServer;
    var idade = req.body.idadeServer;
    var idUsuario = req.body.idUsuarioServer;

    dashboardPetModel.registrarPeso(peso, idade, idUsuario)
        .then(function (resultado) {

            res.json(resultado);

        }).catch(function (erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

module.exports = {
    buscarDados,
    buscarHistorico,
    registrarPeso
};