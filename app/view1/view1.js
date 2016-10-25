'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.videos'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'videos', function($scope, videos) {
    $scope.videos = videos.list;
    console.log($scope.videos);
}]);