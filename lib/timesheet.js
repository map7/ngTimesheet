// Timesheet module
// 
// Requirements
// - angular 1.0.8 or greater
// - angular-timer 1.0.12 or greater
// 
angular.module('timesheet', ['timer'])
	.directive('timesheet', function($http) {
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
					// Compile the data into JSON
					data = {message: this.message, hrs: time.hours, mins: time.minutes, secs: time.seconds}

					// Post the timesheet to the backend with supplied URL
					$http.post(this.postUrl, data).
						success( function(response, status, headers, config) {
							console.log("Successfully posted ", data);
							$scope.toPost = false;
						}).
						error( function(response, status, headers, config){
							console.log("Failed posted ", response);
						});
					
				}

				$scope.$on('timer-stopped', function (event, data){
					this.time = data;
					console.log('Timer Stopped - data = ', data);
				});
			},
			templateUrl: '../templates/timesheet.html'

		};
	});

