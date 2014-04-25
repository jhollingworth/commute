var moment = require('moment');

function JourneyController($scope) {
    $scope.timeArrives = timeArrives();
    $scope.minToDeparture = minToDeparture();

    function timeArrives() {
        return moment($scope.journey.arrival).format('H:mm')
    }

    function minToDeparture() {
        return moment($scope.journey.start).fromNow()
    }
}

JourneyController.$inject = ['$scope'];

module.exports = JourneyController;
