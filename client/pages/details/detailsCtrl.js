var DetailsCtrl = function($http, $location, $timeout, $rootScope) {
    var _this = this;

    this.$http = $http;
    this.$location = $location;
    this.$timeout = $timeout;
    this.$rootScope = $rootScope;

    $http.get('api/stocks/info').success(function(data) {
        _this.stocksInfo = data;
        var searchedSymbol = $location.search().symbol;

        if (searchedSymbol) {
            _this.selectedStockInfo = _this.stocksInfo.filter(
                function(stockInfo) {
                    return stockInfo.symbol === searchedSymbol;
                }
            )[0];
            _this.loadStockPricesForSymbol(searchedSymbol);
        }

    });

};

DetailsCtrl.prototype.onSelectedStockChange = function() {
    if (this.isValidStockSymbol(this.selectedStockInfo.symbol)) {
        this.$rootScope.viewAnimation = '';
        this.$location.search('symbol', this.selectedStockInfo.symbol);
    }
};

DetailsCtrl.prototype.isValidStockSymbol = function(symbol) {
    var num = Math.random();

    if (num < 0.4) {
        this.dailyPrices = [[0,0]];
        return false;
    }
    return true;
};

DetailsCtrl.prototype.loadStockPricesForSymbol = function(symbol) {
    var _this = this;

    this.$http.get('api/stocks/price/' + symbol).success(function(data) {
        _this.dailyPrices = data.dailyPrices;
    });
};
