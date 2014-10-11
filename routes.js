module.exports = function(app){

  var series = require('./controllers/series');

  app.get('/series', series.findAllSeries);
  app.get('/series/:id', series.findById);
  app.post('/series', series.addSerie);
  app.put('/series/:id', series.updateSerie);
  app.delete('/series/:id', series.deleteSerie);
}
