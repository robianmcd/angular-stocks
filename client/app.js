var app = angular.module('stockApp', ['ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider
        .when('/overview', {
            templateUrl: 'pages/overview/overview.html'
        })
        .when('/details', {
            templateUrl: 'pages/details/details.html'
        })
        .otherwise({
            redirectTo: '/overview'
        });
  }]);