var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id_usuario, nome, email FROM usuarios WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

function cadastrar(nome, email, senha, telefone, tem_pet) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, telefone, tem_pet);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha, telefone, tem_pet) VALUES ('${nome}', '${email}', '${senha}', '${telefone}', ${tem_pet});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para cadastro do pet
function cadastrarPet(fkUsuario, nomePet, idadePet, pesoPet, diasCompanheirismo) {
    console.log("ACESSEI O USUARIO MODEL para cadastrar o PET");
    
    var instrucaoSql = `
        INSERT INTO pets (fk_usuario, nome_pet, idade, peso, dias_companheirismo) 
        VALUES (${fkUsuario}, '${nomePet}', ${idadePet}, ${pesoPet}, ${diasCompanheirismo});
    `;
    console.log("Executando a instrução SQL do Pet: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarPet
};