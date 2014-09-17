var OverviewCtrl = function ($http, $location, $rootScope, $log) {
    _this = this;
    this.$location = $location;
    this.$rootScope = $rootScope;
    this.$log = $log;

    $http.get('/api/stocks/info').success(function (data) {
        _this.stocksInfo = data;
        if (data === undefined) {
            this.$error.info('Could not retrieve stock info from server.');
        }
    });
};

OverviewCtrl.prototype.goToStockDetails = function (stockInfo) {
    this.$rootScope.viewAnimation = 'slide-left';
    this.$location.path('details').search('symbol', stockInfo.symbol);
};

OverviewCtrl.prototype.clearSearch = function() {
    this.search = '';
};