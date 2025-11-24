class Produto{
    nome: string;
    preco: number;

    constructor(nome:string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }

    desconto(porcentagem: number){
        return this.preco - (this.preco * porcentagem / 100);
    }
}

const produto = new Produto("Blusa",200)
console.log(produto.desconto(10))