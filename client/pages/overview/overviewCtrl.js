var OverviewCtrl = function ($http, $log, $location) {
    var _this = this;
    this.$location = $location;

    $http.get({url: 'api/stocks/info'}).success(function (data) {
        _this.stocksInfo = data;
    });
};

OverviewCtrl.prototype.goToStockDetails = function (stockInfo) {
    this.$log.info('going to stock details for: ' + stockInfo.id);
    this.$location.path('details').search('symbol', stockInfo.id);
};