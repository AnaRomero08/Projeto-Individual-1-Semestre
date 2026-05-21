// src/models/formularioModel.js
var database = require("../database/config");

function cadastrarResposta(valor, idUsuario, idFormulario) {
    console.log(`Recebido no Model -> Valor: ${valor}, Usuário: ${idUsuario}, Form: ${idFormulario}`);
    var instrucaoSql = `INSERT INTO resposta (valor_resposta, fk_usuario, fk_formulario) VALUES ('${valor}', ${idUsuario == null ? 'NULL' : idUsuario}, ${idFormulario});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { cadastrarResposta };
