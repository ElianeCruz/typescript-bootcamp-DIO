"use strict";
var Atividade;
(function (Atividade) {
    Atividade[Atividade["Atriz"] = 0] = "Atriz";
    Atividade[Atividade["Padeiro"] = 1] = "Padeiro";
})(Atividade || (Atividade = {}));
let pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Atividade.Atriz
};
let pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Atividade.Padeiro
};
let pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Atividade.Atriz
};
let pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Atividade.Padeiro
};
