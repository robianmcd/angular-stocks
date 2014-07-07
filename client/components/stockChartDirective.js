var app = angular.module('stockApp');

app.directive('stockChart', function () {
    return {
        scope: {
            series: '='
        },
        link: function (scope, element) {
            scope.$watch('series', function (newValue) {
                if (newValue) {
                    element.highcharts('StockChart', {
                        rangeSelector: {
                            selected: 1
                        },

                        title: {
                            text: 'Stock Price'
                        },

                        series: [{
                            name: 'Value',
                            type: 'area',
                            data: scope.series,
                            tooltip: {
                                valueDecimals: 2
                            },
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
                            },
                            threshold: null
                        }]
                    });
                }
            });
        }
    };
});