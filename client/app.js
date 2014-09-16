var app = angular.module('stockApp', ['ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

app.config(['$routeProvider', '$provide',
    function ($routeProvider, $provide) {
        $routeProvider
            .when('/overview', {
                templateUrl: 'pages/overview/overview.html',
                order: 0
            })
            .when('/details', {
                templateUrl: 'pages/details/details.html',
                order: 1
            })
            .otherwise({
                redirectTo: '/overview'
            });

        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    }]);

app.run(['$httpBackend', function ($httpBackend) {
    $httpBackend.whenGET('/api/stocks/info').respond(200, mockedStocks);

    $httpBackend.whenGET(/\/api\/stocks\/price\/.*/).respond(function (method, url, data, headers) {
        return [200, {dailyPrices: generateDailyPrices()}, {}];
    });

    $httpBackend.whenGET(/.*/).passThrough();

}]);

var generateDailyPrices = function () {
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

var mockedStocks = [{
    "symbol": "ADBE",
    "name": "Adobe Systems Inc.",
    "change": -1.21,
    "percentChange": -1.96,
    "value": 60.4,
    "volume": 3699758
}, {
    "symbol": "HPQ",
    "name": "Hewlett Packard Company",
    "change": 0.61,
    "percentChange": 1.93,
    "value": 32.19,
    "volume": 10614887
}, {
    "symbol": "GOOG",
    "name": "Google Inc.",
    "change": 0.97,
    "percentChange": 0.19,
    "value": 517.15,
    "volume": 2803252
}, {
    "symbol": "LXK",
    "name": "Lexmark International Inc.",
    "change": 0.77,
    "percentChange": 1.85,
    "value": 42.38,
    "volume": 1317686
}, {
    "symbol": "INTU",
    "name": "Intuit Inc.",
    "change": -0.65,
    "percentChange": -0.86,
    "value": 74.69,
    "volume": 589952
}, {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "change": 22.15,
    "percentChange": 3.87,
    "value": 594.09,
    "volume": 20841477
}, {
    "symbol": "SNDK",
    "name": "SanDisk Corp.",
    "change": 0.03,
    "percentChange": 0.04,
    "value": 84.38,
    "volume": 3084649
}, {
    "symbol": "INTC",
    "name": "Intel Corporation",
    "change": 0.07,
    "percentChange": 0.27,
    "value": 26.33,
    "volume": 31255106
}, {
    "symbol": "MSFT",
    "name": "Microsoft Corporation",
    "change": 0.96,
    "percentChange": 2.41,
    "value": 40.87,
    "volume": 49005058
}, {
    "symbol": "TEL",
    "name": "TE Connectivity Ltd.",
    "change": -0.9,
    "percentChange": -1.52,
    "value": 58.34,
    "volume": 2079001
}, {
    "symbol": "AMKR",
    "name": "Amkor Technology, Inc.",
    "change": -0.09,
    "percentChange": -1.26,
    "value": 7.07,
    "volume": 1801758
}, {
    "symbol": "AVX",
    "name": "AVX Corp.",
    "change": 0.53,
    "percentChange": 4.02,
    "value": 13.7,
    "volume": 442165
}];