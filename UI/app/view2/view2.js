'use strict';

angular.module('inlineEdit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

  .controller('View2Ctrl', ['$scope', '$http','inlineEdit',
    function ($scope, $http, inlineEdit) {
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
  .factory("inlineEdit", ['$http',function ($http) {
    return function (recordCache, Resource) {
      this.recordCache = recordCache;
      this.resource = Resource;
      this.edit = function (record) {
        angular.extend(this.recordCache = record, { editing: true });
      };
      this.cancel = function () {
        delete this.recordCache.editing;
		people.collection =people.collection;
        this.recordCache = {};
      };
      this.save = function () {
		  
		  var data = $.param(this.recordCache);
		  $http({
			  url: 'http://localhost:3928/api/UpdatePerson', 
			  method: 'POST', 
			  data: data,
			  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			  })
            .then(function (response) {
				
            },function (response) {
			console.log('Error updating people data');
            });
			
	
        delete this.recordCache.editing;
		
        console.log(JSON.stringify(this.recordCache));
        this.recordCache = {};
      };
    }
  }]);