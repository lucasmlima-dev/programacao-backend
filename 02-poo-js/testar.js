const Livro = require("./Livro");

const livro1 = new Livro("Clean Code", "Robert C. Martin", 89.9, 12);
const livro2 = new Livro("O Pequeno Príncipe", "Saint-Exupéry,", 34.9, 5);

// console.log(livro1.titulo);
// console.log(livro2.titulo);
// console.log("");

livro1.descrever();

const valor = livro1.valorEmEstoque();
console.log("Valor total em estoque: R$ " + valor.toFixed(2));

// Classe: o molde. Existe uma vez. Diz oq todo livro TEM e o que todo livro FAZ.
// Objeto: feito apartir do molde. Existem vários. Cada um tem suas características.
// Atributo: o que o objeto TEM -> titulo autor preco estoque.
// Método: o que o objeto faz -> descrever, valoremestoque, vender.

console.log("");

livro1.preco = 99.9;
console.log(livro1.preco);

// livro1.preco = -50;
// console.log(livro1.preco);

// Muda o cout << para console.log(...) , o ; deixa de ser obrigatório no fim de cada linha,
// e não se declara o tipo da condição. A estrutura if (condição) { ... } é a mesma coisa. Se
// você entende if em C++, você já entende if em JavaScript — é vocabulário novo em cima
// de uma ideia que você já tem.
// Uma peça é nova mesmo assim: return sozinho, sem valor, dentro do if . Em C++ vocês
// resolveriam isso com else ou deixando o código seguir adiante. Em JavaScript, um return
// sem valor interrompe o método imediatamente — é como dizer "pare tudo e volte, sem
// entregar nada".
// É por isso que, quando o preço é negativo, o código nunca chega até
// this.#preco = novoPreco .

const Categoria = require("./Categoria");

console.log("");
console.log("===== CATEGORIAS =====");
console.log("");

const cat1 = new Categoria("Tecnologia", "livros sobre programacao");
const cat2 = new Categoria("Literatura", "romances e contos");

cat1.descrever();
console.log("");

cat2.descrever();
console.log("");

console.log("----- testando o setter -----");

cat1.nome = "TI"; // invalido: menos de 3 letras
console.log("Nome agora: " + cat1.nome);
cat1.nome = "Tecnologia da Informacao"; // valido
console.log("Nome agora: " + cat1.nome);