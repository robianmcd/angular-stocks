module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        reporters: ['spec'],

        // list of files / patterns to load in the browser
        files: [
            'client/bower/jquery/dist/jquery.js',
            'client/bower/angular/angular.js',
            'client/bower/angular-route/angular-route.js',
            'client/bower/angular-animate/angular-animate.js',
            'client/bower/angular-mocks/angular-mocks.js',
            'client/bower/angular-strap/dist/angular-strap.js',
            'client/bower/angular-strap/dist/angular-strap.tpl.js',
            'client/*.js',
            'client/!(bower)/**/*.js',
            'test/**/*.js'
        ],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
