/// <reference path="../../../typeDefs/angular/angular.d.ts" />

var OverviewCtrl = (function () {
    function OverviewCtrl($http, $location) {
        var _this = this;
        this.$location = $location;
        $http.get('api/stocks/info').success(function (data) {
            _this.stocksInfo = data;
        });
    }
    OverviewCtrl.prototype.goToStockDetails = function (stockInfo) {
        this.$location.path('details').search('symbol', stockInfo.symbol);
    };
    return OverviewCtrl;
})();
//# sourceMappingURL=overviewCtrl.js.map
