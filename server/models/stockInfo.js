module.exports = function(mongoose) {
    var stockInfoSchema = mongoose.Schema({
        symbol: String,
        name: String,
        change: Number,
        percentChange: Number,
        value: Number,
        volume: Number
    });

    var StockInfo = mongoose.model('StockInfo', stockInfoSchema);
    return StockInfo;
}