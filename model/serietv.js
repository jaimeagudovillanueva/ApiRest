var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var Serie = new Schema({
  titulo:    { type: String },
  anio:     { type: Number },
  pais:  { type: String },
  poster:   { type: String },
  temporadas:  { type: Number },
  genero:    { type: String, enum:
  ['Drama', 'Fantasía', 'Ciencia ficción', 'Thriller', 'Comedia']
        },
  sinopsis:  { type: String }
});

module.exports = mongoose.model('Serie', Serie);
