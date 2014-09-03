/// <reference path="../../../typeDefs/angular/angular.d.ts" />

interface StockInfo {
    symbol: string
    name: string
    change: number
    percentChange: number
    value: number
    volume: number
}

class OverviewCtrl {
    public stocksInfo;

    constructor($http:ng.IHttpService, private $location:ng.ILocationService) {
        $http.get('api/stocks/info').success((data) => {
            this.stocksInfo = data;
        });
    }

    goToStockDetails(stockInfo:StockInfo) {
        this.$location.path('details').search('symbol', stockInfo.symbol);
    }
}
