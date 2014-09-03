var mongoose = require('mongoose');

//Local: mongodb://0.0.0.0/angularStocks
//Remote: mongodb://admin:angular@ds037627.mongolab.com:37627/heroku_app27052837

mongoose.connect(process.env.mongoUrl);

var StockInfo = require('./models/stockInfo')(mongoose);
var StockPrices = require('./models/stockPrices')(mongoose);

var mockStockInfo = [{
    symbol: "ADBE",
    name: "Adobe Systems Inc.",
    change: -1.21,
    percentChange: -1.96,
    value: 60.40,
    volume: 3699758
}, {
    symbol: "GOOG",
    name: "Google Inc.",
    change: 0.97,
    percentChange: 0.19,
    value: 517.15,
    volume: 2803252
}, {
    symbol: "AAPL",
    name: "Apple Inc.",
    change: 22.15,
    percentChange: 3.87,
    value: 594.09,
    volume: 20841477
}, {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    change: 0.96,
    percentChange: 2.41,
    value: 40.87,
    volume: 49005058
}, {
    symbol: "AMKR",
    name: "Amkor Technology, Inc.",
    change: -0.09,
    percentChange: -1.26,
    value: 7.07,
    volume: 1801758
}, {
    symbol: "HPQ",
    name: "Hewlett Packard Company",
    change: 0.61,
    percentChange: 1.93,
    value: 32.19,
    volume: 10614887
}, {
    symbol: "LXK",
    name: "Lexmark International Inc.",
    change: 0.77,
    percentChange: 1.85,
    value: 42.38,
    volume: 1317686
}, {
    symbol: "SNDK",
    name: "SanDisk Corp.",
    change: 0.03,
    percentChange: 0.04,
    value: 84.38,
    volume: 3084649
}, {
    symbol: "TEL",
    name: "TE Connectivity Ltd.",
    change: -0.90,
    percentChange: -1.52,
    value: 58.34,
    volume: 2079001
}, {
    symbol: "AVX",
    name: "AVX Corp.",
    change: 0.53,
    percentChange: 4.02,
    value: 13.70,
    volume: 442165
}, {
    symbol: "INTC",
    name: "Intel Corporation",
    change: 0.07,
    percentChange: 0.27,
    value: 26.33,
    volume: 31255106
}, {
    symbol: "INTU",
    name: "Intuit Inc.",
    change: -0.65,
    percentChange: -0.86,
    value: 74.69,
    volume: 589952
}];

if (process.env.mongoUrl === 'mongodb://0.0.0.0/angularStocks') {
    mockStockInfo.push({
        symbol: "C9",
        name: "Cloud 9",
        change: 0.9,
        percentChange: 0.9,
        value: 99.99,
        volume: 999999
        
    });
    
}

var generateDailyPrices = function() {
    var now = new Date().getTime();
    var milisecondsPerDay = 1000 * 60 * 60 * 24;

    var curTimestamp = 1167609600000;
    var value = 100;

    var dailyPrices = [];

    while (curTimestamp < now) {
        dailyPrices.push([curTimestamp, value]);

        value += (Math.random() - 0.5) * 2;
        value = Math.round(value * 100) / 100;

        curTimestamp += milisecondsPerDay;
    }

    return dailyPrices;
};

var errLogger = function(err) {
    if (err) return console.error(err);
}

StockInfo.find().remove(function(err) {
    if (err) return console.error(err);

    mockStockInfo.forEach(function(element) {
        new StockInfo(element).save(errLogger);
    });

});

StockPrices.find().remove(function(err) {
    if (err) return console.error(err);

    mockStockInfo.forEach(function(element) {
        new StockPrices({
            symbol: element.symbol,
            dailyPrices: generateDailyPrices()
        }).save(errLogger());
    });
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Connected to Mongo');
});