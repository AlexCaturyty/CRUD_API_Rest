const { initOptions, connectionString } = require('../db'); // Importe initOptions e connectionString

const pgp = require('pg-promise')(initOptions);
const db = pgp(connectionString);

class Categoria {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
  }

  // Métodos para realizar operações de CRUD

  static create(categoria) {
    return db.one('INSERT INTO categorias (nome) VALUES ($1) RETURNING *', [categoria.nome]);
  }

  static findAll() {
    return db.manyOrNone('SELECT * FROM categorias');
  }

  static findById(id) {
    return db.oneOrNone('SELECT * FROM categorias WHERE id = $1', [id]);
  }

  static update(id, categoria) {
    return db.one('UPDATE categorias SET nome=$1 WHERE id=$2 RETURNING *', [categoria.nome, id]);
  }

  static delete(id) {
    return db.none('DELETE FROM categorias WHERE id=$1', [id]);
  }

  static getProdutosPorCategoria(idCategoria) {
    return db.manyOrNone(
      'SELECT p.id, p.nome FROM produtos p JOIN produto_categoria pc ON p.id = pc.produto_id WHERE pc.categoria_id = $1',
      [idCategoria]
    );
  }

  
}

module.exports = Categoria;
