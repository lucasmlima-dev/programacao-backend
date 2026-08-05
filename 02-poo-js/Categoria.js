class Categoria {
  #nome;
  #descricao;
  #totalDeLivros;
  constructor(nome, descricao) {
    this.#totalDeLivros = 0;
    this.#nome = nome;
    this.#descricao = descricao;
  }
  // ----- LEITURA (getters) -----
  get totalDeLivros() {
    return this.#totalDeLivros;
  }

  get nome() {
    return this.#nome;
  }
  get descricao() {
    return this.#descricao;
  }
  // ----- ESCRITA COM VALIDAÇÃO (setter) -----
  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("ERRO: o nome da categoria precisa de pelo menos 3 letras.");
      return;
    }
    this.#nome = novoNome;
  }

  set descricao(novaDescricao) {
    if (novaDescricao.length < 5) {
        console.log("ERRO: a descricao precisa de pelo menos 5 letras.");
        return;
    }
    this.#descricao = novaDescricao;

  }
  // ----- MÉTODO -----
  descrever() {
    console.log("Categoria: " + this.#nome);
    console.log("Descricao: " + this.#descricao);
    console.log("Total de Livros: " + this.#totalDeLivros)
    // A saída deve ficar: Descricao: livros sobre programacao
  }

  
}
module.exports = Categoria;
