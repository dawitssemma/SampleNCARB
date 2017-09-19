'use strict';

angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', ['$scope', '$http',
    function ($scope, $http, myApp.view2) {
    var people = this;

    $http({
      url: 'http://localhost:3928/api/people'
    }).then(function (res) {
      people.collection = res.data;
      console.log("successful");
    }, function (error) {
      console.log('Error getting people data');
    });

    people.editor = new inlineEdit(people.record);    
  }])
  .factory("myApp.view2", function () {
    return function (recordCache, Resource) {
      this.recordCache = recordCache;
      this.resource = Resource;
      this.edit = function (record) {
        angular.extend(this.recordCache = record, { editing: true });
      };
      this.cancel = function () {
        delete this.recordCache.editing;
        this.recordCache = {};
      };
      this.save = function () {
        delete this.recordCache.editing;
        console.log(JSON.stringify(this.recordCache));
        this.recordCache = {};
      };
    }
  });