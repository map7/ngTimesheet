var gulp = require('gulp');
var gutil = require('gulp-util');
var karma = require('gulp-karma');

var testFiles = [
	'app/bower_components/angular/angular.js',
	'lib/timesheet.js',
	'test/unit/*.js'
];

var testE2eFiles = [
	'app/bower_components/angular/angular.js',
	'lib/timesheet.js',
	'test/e2e/*.js'
];

gulp.task('test', function(){
	gulp.src(testFiles)
		.pipe(karma({
			configFile: 'config/karma.conf.js',
			action: 'watch'
		}));
});

gulp.task('teste2e', function(){
	gulp.src(testE2eFiles)
		.pipe(karma({
			configFile: 'config/karma-e2e.conf.js',
			action: 'watch'
		}));
});

gulp.task('default', function(){
	
});
