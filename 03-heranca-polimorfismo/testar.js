const LivroFisico = require("./LivroFisico");

const l1 = new LivroFisico("Clean Code", "Robert C. Martin", 89.9, 12, 0.6);

l1.descrever();
console.log("Frete: R$ " + l1.calcularFrete().toFixed(2));

console.log("");

const LivroDigital = require("./LivroDigital");

const l2 = new LivroDigital(
  "Eloquent JavaScript",
  "Marijn Haverbeke",
  45.0,
  999,
  8,
);
l2.descrever();
console.log("Frete R$ " + l2.calcularFrete().toFixed(2));

console.log("");
console.log("----- polimorfismo -----");
console.log("Frete do fisico: R$ " + l1.calcularFrete().toFixed(2));
console.log("Frete do digital: R$ " + l2.calcularFrete().toFixed(2));
