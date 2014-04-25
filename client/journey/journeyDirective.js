var fs = require('fs');
var JourneyController = require('./journeyController');
var template = fs.readFileSync(__dirname + '/journeyTemplate.html', 'utf-8');

function JourneyDirective() {
    return {
        restrict: 'EA',
        template: template,
        controller: JourneyController,
        scope: {
            'journey': '='
        }
    }
}

JourneyDirective.$inject = [];

module.exports = JourneyDirective;
