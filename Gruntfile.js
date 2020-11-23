module.exports = function(grunt){

    const sass = require('node-sass');

    // Configuration
    grunt.initConfig({
        concat: { // comes from grunt-contrib-///// from below
            js: {
                src: ['js/*.js'],
                dest: 'build/script.js'
            },
            css: {
                src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],
                dest: 'build/styles.css'
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            build: {
                files: [{
                    src: 'css/sass/styles.scss',
                    dest: 'css/styles.css'
                }]
            }
        },

        uglify: {
            build: {
                files: [{
                    src: 'build/script.js',
                    dest: 'build/script.js'
                }]
            }
        }
    })

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    // Register tasks
    grunt.registerTask('concat-js', ['concat:js'])
    grunt.registerTask('concat-css', ['concat:css'])
    
}