'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 
    function ($scope, $http) {

      $http({
        url: 'http://localhost:3928/api/people'
      }).then(function (res) {
        $scope.people = res.data;
        console.log("successful");
      }, function (error) {
        console.log('Error getting people data');
      });
	  
}]);