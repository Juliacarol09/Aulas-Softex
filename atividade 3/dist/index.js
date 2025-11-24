"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    desconto(porcentagem) {
        return this.preco - (this.preco * porcentagem / 100);
    }
}
const produto = new Produto("Blusa", 200);
console.log(produto.desconto(10));
