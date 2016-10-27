'use strict'

angular.module('myApp.viewHome', ['ngRoute', 'myApp.videos'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/home',{
            templateUrl: 'viewHome/viewHome.html',
            controller: 'ViewHomeCtrl'
        });
    }])

    .controller('ViewHomeCtrl', ['$scope', 'videos', function($scope, videos){
        console.log(videos.getAllVideos());
        $scope.videos = videos.getAllVideos();
    }])