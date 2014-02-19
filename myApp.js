var myApp = angular.module('myApp', ['timer']);

myApp.directive('timesheet', function() {
  return {
      restrict: 'E',
	  scope: {
		  postUrl: '@'
	  },
	  controller: function($scope, $element, $attrs, $transclude){
		  $scope.timerRunning = true;
		  $scope.toPost = false;
		  $scope.time = null;
		  
		  $scope.startTimer = function(){
			  $scope.$broadcast('timer-start');
			  $scope.timerRunning = true;
		  };

		  $scope.stopTimer = function(){
			  $scope.$broadcast('timer-stop');
			  $scope.timerRunning = false;
			  $scope.toPost = true;
		  };

		  $scope.postTimesheet = function(){
			  debugger
			  console.log('Post ', this.message, ' to ', this.postUrl)
		  }

		  $scope.$on('timer-stopped', function (event, data){
			  this.time = data;
			  console.log('Timer Stopped - data = ', data);
		  });
	  },
      templateUrl: 'timesheet.html'

  };
});

