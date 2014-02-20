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
					$scope.message = '';
					$scope.timerRunning = false;
					$scope.toPost = true;
				};

				$scope.postTimesheet = function(){
					timeStr = time.hours + 'hrs ' + time.minutes + 'mins ' + time.seconds + 'secs'
					console.log('Post \'', timeStr, ' ', this.message, '\' to: ', this.postUrl)
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

