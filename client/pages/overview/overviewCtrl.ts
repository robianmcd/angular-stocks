interface StockInfo {
    symbol: string
    name: string
    change: number
    percentChange: number
    value: number
    volume: number
}

class OverviewCtrl {
    constructor($http:ng.IHttpService, private $location:ng.ILocationService) {
        $http.get('api/stocks/info').success((data:StockInfo[]) => {
            this.stocksInfo = data;
        });
    }

    stocksInfo:StockInfo[];

    goToStockDetails(stockInfo:StockInfo) {
        this.$location.path('details').search('symbol', stockInfo.symbol);

        this.$location.path()
    }
}
