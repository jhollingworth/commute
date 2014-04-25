var _ = require('lodash');

module.exports = function(grunt) {
    var DEFAULT_OPTIONS = {
        src: ['client/main.js'],
        dest: 'server/public/main.js'
    }

    grunt.config('browserify', {
        dev: options(),
        watch: options({
            options: {
                watch: true, 
                keepAlive: true
            }
        }),
        release: options({
            options: {
                debug: false
            }
        })
    })
    
    function options(locals) {
        return _.extend(locals, DEFAULT_OPTIONS);
    }
}
