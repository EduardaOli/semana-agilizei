#language: pt

Funcionalidade: Listagem

    Como usuário, desejo acessr a listagem 
    Para que possa visualizar meus dados de Cadastro

Cenario: Listagem sem registros
    Dado que o site não possui registro
    Quando acessar a listagem 
    Entao devo visualizar a listagem vazia

Cenario: Listagem com um registro
    Dado que o site possui apenas um registro
    Quando acessar a listagem 
    Entao devo visualizar apenas um registro