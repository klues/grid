module.exports = function (grunt) {
    var source = 'src/';
    var destination = 'build/';

    grunt.initConfig({

        // define source files and their destinations
        uglify: {
            files: {
                expand: true,
                cwd: source,
                src: '**/*.js',
                dest: destination
            }
        },
    });

// load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

// register at least this one task
    grunt.registerTask('default', ['uglify']);

};