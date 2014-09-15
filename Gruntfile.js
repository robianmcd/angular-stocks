module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            app: {
                files: {
                    'build/app.js': ['client/**/*.js', '!client/bower/**']
                },
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    mangle: false,
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                }
            }
        }

    });

    grunt.registerTask('app', ['uglify:app']);

};
