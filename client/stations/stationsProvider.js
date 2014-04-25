var _ = require('lodash');
var STATIONS_URL = '/stations.json';

function StationsProvider($http, $log) {
    $log.debug('Getting stations from', STATIONS_URL);

    var stations = $http.get(STATIONS_URL).error(error).then(parseResponse)

    this.get = get;
    this.search = search;

    function search(query) {
        query = query.toLowerCase(); 

        return stations.then(findStations);

        function findStations(stations) {
            $log.debug('Searching stations for', query, stations);
            
            return _.pick(stations, Object.keys(stations).filter(containsQuery));

            function containsQuery(station) {
                return station.toLowerCase().indexOf(query) != -1;
            }
       }
    }

    function get(name) {
        return stations.then(getStation);

        function getStation(stations) {
            return stations[name];
        }
    }

    function parseResponse(res) {
        return res.data
    }

    function error(data, status, headers, config) {
        $log.error('Failed to get stations', status, data, headers)
    }
}

StationsProvider.$inject = ['$http', '$log'];

module.exports = StationsProvider;
