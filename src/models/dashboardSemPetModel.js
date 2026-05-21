// src/models/dashboardSemPetModel.js
var database = require("../database/config");

// KPI: total de usuários que já responderam o formulário de adoção
function buscarVidasTransformadas() {
    var instrucaoSql = `
        SELECT COUNT(DISTINCT fk_usuario) AS vidas_transformadas
        FROM resposta
        WHERE fk_formulario = 2;
    `;
    return database.executar(instrucaoSql);
}

// KPI: média geral das notas da escala de felicidade
function buscarIndiceFelicidade() {
    var instrucaoSql = `
        SELECT ROUND(AVG(CAST(valor_resposta AS DECIMAL(5,2))), 2) AS indice_felicidade
        FROM resposta
        WHERE fk_formulario = 1;
    `;
    return database.executar(instrucaoSql);
}

// Gráfico de pizza: distribuição das respostas do formulário de adoção
// Valores esperados: 'Já adotaram', 'Pretendem adotar', 'Apenas amam gatos'
function buscarStatusAdocao() {
    var instrucaoSql = `
        SELECT
            valor_resposta AS status_adocao,
            COUNT(*) AS total,
            ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) AS percentual
        FROM resposta
        WHERE fk_formulario = 2
        GROUP BY valor_resposta
        ORDER BY total DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarVidasTransformadas,
    buscarIndiceFelicidade,
    buscarStatusAdocao
};