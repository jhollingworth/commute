var _ = require('lodash');

module.exports = function(grunt) {
    var DEFAULT_OPTIONS = {
        src: ['client/main.js'],
        dest: 'server/public/main.js',
        options: {
            debug: true,
            transform: ['brfs', 'cssify']
        }
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

    // console.log(JSON.stringify(grunt.config('browserify'), null, 2))
    
    function options(locals) {
        return _.merge(locals || {}, DEFAULT_OPTIONS);
    }
}
