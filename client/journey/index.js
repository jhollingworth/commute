require('./journey.less');

module.exports = function(app) {
    app.service('journeys', require('./journeysProvider'))
    app.directive('journey', require('./journeyDirective'))
}
