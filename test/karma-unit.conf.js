module.exports = function(conf) {
	 conf.set({
		basePath: '../',
		frameworks: ['jasmine'],
		reporters: ['dots'],
		browsers: ['PhantomJS'],
		//browsers: ['Chrome', 'Firefox', 'Safari', 'Opera','PhantomJS'],

		// these are default values anyway
		singleRun: true,
		colors: true,

		files: [
			'./client/libs/jquery/jquery.js',
			'./client/libs/angular/angular.js',
    		'./client/libs/angular-route/angular-route.js',
    		'./client/libs/angular-mocks/angular-mocks.js',
    		'./client/libs/crypto-js/components/core.js',
			'./client/libs/crypto-js/components/md5.js',
			'./client/js/*.js',
    		'./test/unit/**/*.js'
		]
	});
};