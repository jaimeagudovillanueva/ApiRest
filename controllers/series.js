var Serie = require('../model/serietv');

exports.findAllSeries = function(req, res){
  Serie.find(function(err, series){
    if (!err){
      res.send(series);
    } else {
      console.log('Se ha producido un error:' + err);
      res.status(500).send(err);
    }
  });
}

exports.findById = function(req, res){
  Serie.findById(req.params.id, function(err, serie){
    if (!err){
      res.send(serie);
    } else {
      console.log('Se ha producido un error:' + err);
      res.status(500).send(err);
    }
  });
}

exports.addSerie = function(req, res){
  console.log(req.body);

  var serie = new Serie({
    titulo: req.body.titulo,
    anio: req.body.anio,
    pais: req.body.pais,
    poster: req.body.poster,
    temporadas: req.body.temporadas,
    genero: req.body.genero,
    sinopsis: req.body.sinopsis
  });

  serie.save(function(err){
    if (!err){
      console.log('Serie guardada correctamente');
      res.send(serie);
    } else {
      console.log('Se ha producido un error:' + err);
      res.status(500).send(err);
    }
  });
}

exports.updateSerie = function(req, res){
  console.log(req.body);

  Serie.findById(req.params.id, function(err, serie){
    if (!err) {
      serie.titulo = req.body.titulo;
      serie.anio = req.body.anio;
      serie.pais = req.body.pais;
      serie.poster = req.body.poster;
      serie.temporadas = req.body.temporadas;
      serie.genero = req.body.genero;
      serie.sinopsis = req.body.sinopsis;

      serie.save(function(err){
        if (!err) {
          console.log('Serie actualizada');
          res.send(serie);
        } else {
          console.log('Se ha producido un error:' + err);
          res.status(500).send(err);
        }
      });
    } else {
      console.log('Se ha producido un error:' + err);
      res.status(500).send(err);
    }
  });
}

exports.deleteSerie = function(req, res){
  Serie.findById(req.params.id, function(err, serie){
    if (!err) {
      serie.remove(function(err){
        if (!err) {
          console.log('Serie borrada');
          res.status(200).end();
        } else {
          console.log('Se ha producido un error:' + err);
          res.status(500).send(err);
        }
      });
    } else {
      console.log('Se ha producido un error:' + err);
      res.status(500).send(err);
    }
  });
}
