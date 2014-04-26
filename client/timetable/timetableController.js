var _ = require('lodash');

function TimetableController($scope, $rootScope, $log, timetable) {
    $scope.journeys = [];
    $rootScope.$on('get.timetable', getTimetable);

    function getTimetable(e, from, to) {
        timetable.search(from, to).then(showJourneys);
    }

    function showJourneys(journeys) {
        $scope.journeys = journeys
    }
}

TimetableController.$inject = ['$scope', '$rootScope', '$log', 'timetable'];

module.exports = TimetableController;
