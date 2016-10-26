'use strict'

angular.module('myApp.viewHome', ['ngRoute', 'myApp.videos'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/home',{
            templateUrl: 'viewHome/viewHome.html',
            controller: 'ViewHomeCtrl'
        });
    }])

    .controller('ViewHomeCtrl', ['$scope', 'videos', function($scope, videos){
        $scope.videos = videos.getAllVideos();
        console.log("View Home")
        console.log($scope.videos);
    }])