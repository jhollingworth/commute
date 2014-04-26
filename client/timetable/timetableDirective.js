var fs = require('fs');
var TimetableController = require('./timetableController');
var template = fs.readFileSync(__dirname + '/timetableTemplate.html', 'utf-8');

function TimetableDirective() {
    return {
        restrict: 'EA',
        template: template,
        controller: TimetableController
    }
}

TimetableDirective.$inject = [];

module.exports = TimetableDirective;
