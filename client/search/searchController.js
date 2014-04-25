function SearchController($scope, stations) {
    $scope.findStation = findStation;

    function findStation(query) {
        return stations.search(query).then(Object.keys);
    }
}

SearchController.$inject = ['$scope', 'stations'];

module.exports = SearchController;
