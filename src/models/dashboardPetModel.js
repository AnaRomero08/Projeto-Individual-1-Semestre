var database = require("../database/config");

function buscarDados(idUsuario) {

    var instrucaoSql = `

        SELECT
            nome_pet,
            idade,
            peso,
            dias_companheirismo
        FROM pets
        WHERE fk_usuario = ${idUsuario};

    `;

    return database.executar(instrucaoSql);

}

function buscarHistorico(idUsuario) {

    var instrucaoSql = `

        SELECT idade, peso
        FROM pets
        WHERE fk_usuario = ${idUsuario}

        UNION ALL

        SELECT idade, peso
        FROM historico_pet
        WHERE fk_usuario = ${idUsuario}
        ORDER BY idade;

    `;

    return database.executar(instrucaoSql);

}

function registrarPeso(peso, idade, idUsuario) {

    var instrucaoSql = `

        INSERT INTO historico_pet (
            peso,
            idade,
            fk_usuario
        )
        VALUES (
            ${peso},
            ${idade},
            ${idUsuario}
        );

    `;

    return database.executar(instrucaoSql);

}

module.exports = {
    buscarDados,
    buscarHistorico,
    registrarPeso
};