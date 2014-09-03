//Dependencies
var express = require('express');
var mongoose = require('mongoose');


//Initialize
var app = express();
mongoose.connect(process.env.mongoUrl);

var StockInfo = require('./models/stockInfo')(mongoose);
var StockPrices = require('./models/stockPrices')(mongoose);

//Middleware
app.use(express.static(__dirname + '/../build'));


//Database setup
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Connected to Mongo');
});


//Endpoints
app.get('/api/stocks/info', function (req, res) {

    StockInfo.find(function (err, docs) {
        if (err) return res.status(500).send(err);

        res.send(docs);
    });

});


app.get('/api/stocks/price/:symbol', function (req, res) {
    StockPrices.findOne({symbol: req.params.symbol}, function (err, stockPriceInfo) {
        if (!stockPriceInfo) return res.status(404).send('Symbol not found');

        res.send(stockPriceInfo);
    });
});


//Start
var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    console.log('Listening on port %d', server.address().port);
});