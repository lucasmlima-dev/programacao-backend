// extends Livro: Declara o parentesco: LivroFisico passa a ter tudo que Livro tem;

// super(titulo, autor, preco, estoque): Pede para a classe Livro montar a parte dela primeiro

// this.#peso = peso: Só depois disso você acrescenta o que é novo desta subclasse;

const Livro = require("./Livro");

const PRECO_POR_KG = 2.5;

class LivroFisico extends Livro {
  #peso;

  constructor(titulo, autor, preco, estoque, peso) {
    // super() tem que ser a primeira linha do constructor. Se você escrever qualquer coisa antes dele, o Node recusa com um erro grande e assustador. Regra fixa: super() sempre em primeiro lugar.
    super(titulo, autor, preco, estoque);
    this.#peso = peso;
  }

  get peso() {
    return this.#peso;
  }

  calcularFrete() {
    return this.#peso * PRECO_POR_KG;
  }

  descrever() {
    super.descrever();
    console.log("Tipo:  Fisico");
    console.log("Peso:  " + this.#peso + "kg");
    console.log("Frete: R$ " + this.calcularFrete().toFixed(2));
  }
}

module.exports = LivroFisico;
