//Dependencies
var express = require('express');
var mongoose = require('mongoose');


//Initialize
var app = express();
//mongoose.connect('mongodb://' + process.env.IP + '/test');
mongoose.connect('mongodb://admin:angular@ds037627.mongolab.com:37627/heroku_app27052837');

var StockInfo = require('./models/stockInfo')(mongoose);
var StockPrices = require('./models/stockPrices')(mongoose);

//Middleware
app.use(express.static(__dirname + '/../client'));


//Database setup
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Connected to Mongo');
});


//Endpoints
app.get('/api/stocks/info', function(req, res) {

    StockInfo.find(function(err, docs) {
        if (err) return console.error(err);

        res.send(docs);
    });

});


app.get('/api/stocks/price/:symbol', function(req, res) {
    StockPrices.findOne({symbol: req.params.symbol}, function(err, doc) {
        if (err) return console.error(err);
        
        res.send(doc);
    });
});


//Start
var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log('Listening on port %d', server.address().port);
});