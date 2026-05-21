// src/controllers/formularioController.js
var formularioModel = require("../models/formularioModel");

function cadastrarResposta(req, res) {
    var valor = req.body.valorServer;
    var idUsuario = req.body.idUsuarioServer;
    var idFormulario = req.body.idFormularioServer;

    formularioModel.cadastrarResposta(valor, idUsuario, idFormulario)
        .then(function (resultado) {
            res.status(201).send("Sucesso mo back-end!");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
            console.log("\nErro ao realizar o cadastro! Erro: ", erro.sqlMessage);
        });
}

module.exports = { cadastrarResposta };