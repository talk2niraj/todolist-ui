app.service('tasksService', function($http, $q) {
  var BASEURL = 'http://localhost:8080/api/v1/';
  
    this.addTask = function(task) {
		var deferred = $q.defer();
		$http.post(BASEURL+"create/todo/", task).
		success(function(data, status, headers, config) {
			 deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			 deferred.reject(status);
		});
		 return deferred.promise;
  }
  
  this.deleteTask = function(task) {
		var deferred = $q.defer();
		$http.delete(BASEURL+"delete/todo/"+task).
		success(function(data, status, headers, config) {
			 deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			 deferred.reject(status);
		});
		 return deferred.promise;
  }
  
	this.toggleStatus = function(item) {
		var deferred = $q.defer();
		$http.put(BASEURL+"update/todo/"+item).
		success(function(data, status, headers, config) {
			 deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			 deferred.reject(status);
		});
		 return deferred.promise;
  }
  
	this.getTask = function() {
		var deferred = $q.defer();
		$http.get(BASEURL+'get/todo').
		success(function(data, status, headers, config) {
			 deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			 deferred.reject(status);
		});
		 return deferred.promise;
  }
  
});