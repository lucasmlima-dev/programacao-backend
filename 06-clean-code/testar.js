const LivroFisico = require("./LivroFisico");
const LivroDigital = require("./LivroDigital");
const Carrinho = require("./Carrinho");
const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");
const Carrinho = require("./Carrinho");
const Livro = require("./Livro");
const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");

const livro1 = new LivroFisico("Clean Code", "Robert C. Martin", 89.9, 12, 0.6);
const livro2 = new LivroDigital("Eloquent JavaScript", "Marijn Haverbeke", 45.00, 999, 8);

console.log("Livro Fisico:");
livro1.descrever();

console.log("");

console.log("Livro Digital:");
livro2.descrever();

console.log("");

console.log("Carrinho:")
const Carrinho = new Carrinho();
Carrinho.adicionarLivro(LivroFisico);
Carrinho.adicionarLivro(LivroDigital);
Carrinho.resumo();

console.log("");

console.log("Polimorfismo:");
const livros = [LivroFisico, LivroDigital];
livros.forEach((Livro) => {
    console.log(`Livro: ${Livro.titulo} | Frete: R$ ${Livro.calcularFrete().toFixed(2)}`);
});

console.log("");
console.log("Clientes e funcionarios:");
const Cliente = new Cliente("Lucas Maciel de Lima", "lucas.m.lima6@edu.senai.br", 10);
Cliente.descrever();
Cliente.adicionarCompra(120.00);

console.log("");
const Funcionario = new Funcionario("Lucas Maciel de Lima", "lucas.m.lima¨@edu.senai.br", 5000.00, "Funcionario");
// console.log("Frete: R$ " + l1.calcularFrete().toFixed(2));


// const LivroDigital = require("./LivroDigital");

// const livro2 = new LivroDigital(
//   "Eloquent JavaScript",
//   "Marijn Haverbeke",
//   45.0,
//   999,
//   8,
// );
// livro2.descrever();
// console.log("Frete R$ " + livro2.calcularFrete().toFixed(2));

// console.log("");
// console.log("----- polimorfismo -----");
// console.log("Frete do fisico: R$ " + l1.calcularFrete().toFixed(2));
// console.log("Frete do digital: R$ " + l2.calcularFrete().toFixed(2));

// -------------------------------------------------------------------------------------------------
// # Item 
// # O que verificar

// 1 Nomes claros
// Classes, métodos e variáveis têm nomes que dizem o que são, sem abreviações confusas

// 2 Sem números mágicos
// Todo valor com significado (preço, limite, taxa) tem uma constante nomeada

// 3 Métodos pequenos 
// Cada método cabe na tela sem rolar e faz uma coisa só

// 4 Sem duplicação
// Código repetido em métodos ou classes parecidas foi reaproveitado, não copiado

// 5 Dados protegidos
// Atributos com regra de negócio usam # , get e set , não ficam expostos livremente

// 6 Um arquivo, uma classe
// Cada arquivo exporta uma única classe, com module.exports no final

// 7 Comentários úteis
// Se existem comentários, eles explicam o "porquê", não repetem o que o código já diz