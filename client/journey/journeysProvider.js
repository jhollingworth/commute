var JOURNEYS_URL = '/journeys';

function JourneysProvider($http) {
    
    this.search = search;

    function search(from, to) {
        var options = {
            params: {
                to: to,
                from: from
            }
        };

        return $http.get(JOURNEYS_URL, options).then(getData)

        function getData(res) {
            return res.data;
        }
    }
}

JourneysProvider.$inject = ['$http'];

module.exports = JourneysProvider;
