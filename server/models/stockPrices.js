module.exports = function(mongoose) {
    
    var stockPricesSchema = mongoose.Schema({
        symbol: String,
        dailyPrices: []
    });
    
    var StockPrices = mongoose.model('StockPrices', stockPricesSchema);
    return StockPrices;
}