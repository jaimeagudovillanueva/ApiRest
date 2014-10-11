var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/seriestv', function(err, res) {
    if(err) throw err;
    console.log('Conectado a la base de datos seriestv');
});

router.get('/', function(req, res) {
   res.send("Hola mundo!");
});

require('./routes')(app);

app.use(router);

app.listen(3000, function() {
  console.log("Servidor Node escuchando en puerto 3000");
});
