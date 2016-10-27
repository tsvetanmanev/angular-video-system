'use strict'

angular.module('myApp.viewAdd', ['ngRoute', 'myApp.videos'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/add',{
            templateUrl: 'viewAdd/viewAdd.html',
            controller: 'ViewAddCtrl'
        });
    }])

    .controller('ViewAddCtrl', ['$scope', 'videos', function($scope, videos){
        console.log($scope.video)
    }])