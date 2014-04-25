module.exports = function(grunt) {
    grunt.config('express', {
        dev: {
            options: {
                script: 'server/app.js'
            }
        }
    })
}
