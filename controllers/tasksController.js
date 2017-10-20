app.controller('tasksController', function($scope, $q, tasksService) {
  getTask(); 
  
  function getTask(){  
  
	var promise = tasksService.getTask();
    promise.then(function(value) {
        $scope.tasks = value;
    }, function(reason) {
        $scope.error = reason;
		console.log(reason);
    });
  };

  $scope.addTask = function (task) {
	$scope.item = {"title":task, "completed":false};
	
	var promise = tasksService.addTask($scope.item);
		promise.then(function(value) {
			getTask();
			$scope.taskInput = "";
		}, function(reason) {
			$scope.error = reason;
			console.log(reason);
		});

  };
  
  $scope.deleteTask = function (task) {
    if(confirm("Are you sure to delete this line?")){
		var promise = tasksService.deleteTask(task);
		promise.then(function(value) {
			getTask();
		}, function(reason) {
			$scope.error = reason;
			console.log(reason);
		});
		
    }
  };

  $scope.toggleStatus = function(item) {
	var promise = tasksService.toggleStatus(item);
    promise.then(function(value) {
        getTask();
    }, function(reason) {
        $scope.error = reason;
		console.log(reason);
    });
	
  };

  
  $scope.$watch(function() { return $scope.tasks }, function(newVal, oldVal) {
       $scope.tasks = newVal;
    });
	
});