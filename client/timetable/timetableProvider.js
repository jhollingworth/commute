var TIMETABLE_URL = '/timetable';

function TimetableProvider($http) {
    
    this.search = search;

    function search(from, to) {
        var options = {
            params: {
                to: to,
                from: from
            }
        };

        return $http.get(TIMETABLE_URL, options).then(getData)

        function getData(res) {
            return res.data;
        }
    }
}

TimetableProvider.$inject = ['$http'];

module.exports = TimetableProvider;
