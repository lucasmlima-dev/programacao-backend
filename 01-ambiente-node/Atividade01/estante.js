// ===== LIVRO 1 =====
const livro1 = {
  titulo: "Clean Code",
  autor: "Robert C. Martin",
  preco: 89.9,
  estoque: 12,
};
// ===== LIVRO 2 =====
const livro2 = {
  titulo: "O Programador Pragmático",
  autor: "Andrew Hunt e David Thomas",
  preco: 116.99,
  estoque: 8,
};
// Esta linha entrega os dois livros para os outros arquivos usarem
module.exports = { livro1, livro2 };
