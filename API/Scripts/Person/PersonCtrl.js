'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', '$http',
    function ($scope, $http) {

      getPeople();
      function getPeople() {
        $http({
          url: 'http://localhost:3928/api/Person',
          headers: { 'Access-Control-Allow-Origin': '*' },
          method: 'GET'
        }).then(function (res) {
          $scope.people = d.data;
          console.log("successful");
        }, function (error) {
          console.log('Error getting people data');
        });

      }

      $http({
        url: 'http://localhost:3928/api/Person',
        method: 'JSONP'
      }).then(function (res) {
        $scope.people = d.data;
        console.log("successful");
      }, function (error) {
        console.log('Error getting people data');
      });

      this.updatePerson = function (person) {

        return $http(
          {
            method: 'UpdatePerson',
            data: person,
            url: 'api/Person'
          });
      }
    }]);