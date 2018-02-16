'use strict';

angular.module('myApp.controllers', [])
    .controller('Controller1', function ($scope) {
        $scope.message = "Hello, world";
    })
    .controller('Controller2', function ($scope) {
        $scope.now = new Date();
    });





//var employeesys = angular.module('Empapp', ['ngRoute']);
//employeesys.config(function ($routeProvider, $locationProvider) {
//    $locationProvider.html5Mode(true);

//    $routeProvider.when("/", { templateUrl: "partials/Index.html" }).
//                   when("/Empdashboard", { templateUrl: "partials/Employee_dashboard.html" }).
//                   when("/Emplist", { templateUrl: "partials/List_all.html" }).
//                   otherwise({ redirectTo: '/' });

//});

 