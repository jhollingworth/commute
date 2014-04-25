var _ = require('lodash');

function SearchController($scope, $log, stations, journeys) {
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
    
        if(to && from) {
            journeys.search(from, to)
                .then(showJourneys)

        } else {
            showJourneysError('Invalid from or to')        
        }

        function showJourneys(journeys) {
            $scope.journeys = journeys
            console.log('journeys', $scope.journeys)
        }

        function showJourneysError(err) {
            $log.error(err)
        }
    }
}

SearchController.$inject = ['$scope', '$log', 'stations', 'journeys'];

module.exports = SearchController;
