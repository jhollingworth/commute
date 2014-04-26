require('./timetable.less');
module.exports = function(app) {
    app.service('timetable', require('./timetableProvider'))
    app.directive('timetable', require('./timetableDirective'));
}
