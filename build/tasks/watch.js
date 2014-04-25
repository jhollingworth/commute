module.exports = function(grunt) {
    grunt.config('watch', {
        server: {
            files:  [ 'server/**/*.js' ],
            tasks:  [ 'express:dev' ],
            options: {
                spawn: false 
            }
        } 
    })
};
