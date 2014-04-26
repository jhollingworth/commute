var _ = require('lodash');

function SearchController($scope, $log, $rootScope, stations) {
    var stationsCache = {}

    $scope.to = null;
    $scope.from = null;
    $scope.journeys = [];
    $scope.findStation = findStation;
    $scope.findJourneys = findJourneys;

    function findStation(query) {
        return stations.search(query)
            .then(addToCache)
            .then(Object.keys);

        //Need to cache val as typeahead will only accept an array of strings
        function addToCache(stations) {
            cache = _.extend(stationsCache, stations);

            return stations;
        }
    }

    function findJourneys() {
        var to = stationsCache[$scope.to];
        var from = stationsCache[$scope.from];
    
        $rootScope.$broadcast('get.timetable', from, to);
    }
}

SearchController.$inject = ['$scope', '$log', '$rootScope', 'stations'];

module.exports = SearchController;
