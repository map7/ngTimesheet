// Timesheet module
// 
// Requirements
// - angular 1.0.8 or greater
// - angular-timer 1.0.12 or greater
// 
angular.module('timesheet', ['timer'])
	.directive('timesheet', function() {
		return {
			restrict: 'EA',
			scope: {
				postUrl: '@'	// Allow passing a variable
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

					// Declare that we are ready for posting our timesheet entry
					$scope.message = '';
					$scope.toPost = true;
				};

				$scope.postTimesheet = function(){
					// Post the timesheet to the backend with supplied URL
					data = {message: this.message, hrs: time.hours, mins: time.minutes, secs: time.seconds}
					console.log(data, this.postUrl)
					$scope.toPost = false;
				}

				$scope.$on('timer-stopped', function (event, data){
					this.time = data;
					console.log('Timer Stopped - data = ', data);
				});
			},
			templateUrl: '../templates/timesheet.html'

		};
	});

