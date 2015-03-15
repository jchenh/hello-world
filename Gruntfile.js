
module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            dev: {
                options: {
                    base: 'app',
                    hostname: 'localhost',
                    port: 9000,
                    livereload: true, // require 'connect-livereload'
                    open: true
                }
            }
        },
        watch: {
            files: 'app/**/*.html',
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', function() {
        grunt.task.run([
            'connect:dev',
            'watch'
        ]);
    });
};
