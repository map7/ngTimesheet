var myApp = angular.module('myApp', []);

myApp.directive('timesheet', function() {
  return {
      restrict: 'E',
      template: '<h1>Clock</h1>'
  };
});
