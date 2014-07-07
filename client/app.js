var app = angular.module('stockApp', ['ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

app.config(['$routeProvider',
  function ($routeProvider) {
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
  }]);