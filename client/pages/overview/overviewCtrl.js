var OverviewCtrl = function ($http, $location, $rootScope) {
    var _this = this;
    this.$location = $location;
    this.$rootScope = $rootScope;

    $http.get('api/stocks/info').success(function (data) {
        _this.stocksInfo = data;
    });
};

OverviewCtrl.$inject = ['$http', '$location', '$rootScope'];

OverviewCtrl.prototype.goToStockDetails = function (stockInfo) {
    this.$location.path('details').search('symbol', stockInfo.symbol);
};