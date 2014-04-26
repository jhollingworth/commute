require('./journey.less');

module.exports = function(app) {
    app.directive('journey', require('./journeyDirective'))
}
