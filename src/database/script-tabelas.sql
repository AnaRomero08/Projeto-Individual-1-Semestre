-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE blogcats;
USE blogcats;

-- Tabela de Usuários
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    tem_pet TINYINT
);

-- Tabela de Pets (Relacionada ao Usuário)
CREATE TABLE pets (
    id_pet INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT UNIQUE,
    nome_pet VARCHAR(50),
    idade INT,
    peso DECIMAL(4,2), -- Ex: 04.50 kg
    dias_companheirismo INT, -- Valor vindo do seu formulário
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE formulario (
    id_formulario INT PRIMARY KEY AUTO_INCREMENT,
    tipo_formulario VARCHAR(50) -- 'felicidade' ou 'adocao'
);

CREATE TABLE resposta (
	data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
	valor_resposta VARCHAR(100),
	fk_usuario INT,
    fk_formulario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (fk_formulario) REFERENCES formulario(id_formulario)
);

CREATE TABLE comentario (
	id_comentario INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(400),
    data_comentario DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE historico_pet (
    id_historico INT PRIMARY KEY AUTO_INCREMENT,
    peso DECIMAL(4,2),       -- Permite valores como 4.50 ou 5.25
    idade DECIMAL(3,1),      -- Permite valores como 0.5 (meses) ou 2.0 (anos)
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);