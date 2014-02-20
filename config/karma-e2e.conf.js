// Karma configuration
// Generated on Thu Feb 20 2014 15:53:32 GMT+1100 (EST)

module.exports = function(config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '../',

		// frameworks to use
		frameworks: ['ng-scenario'],

		// list of files / patterns to load in the browser
		files: [
			'test/e2e/**/*spec.js'
		],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		// browsers: ['chromium-browser'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		// Proxies
		proxies: {
			'/': 'http://localhost:3030'
		},

		// Plugins
		plugins: [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-ng-scenario'
		]
	});
};
