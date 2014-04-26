var getTimetable = require('../lib/timetable');

module.exports = function (req, res) {

    var to = req.query.to;
    var from = req.query.from;

    getTimetable(from, to)
        .then(success)
        .fail(error)
        .done();

    function success(body) {
        res.send(body)
    }

    function error(err) {
        console.error(err);
        res.send(500);
    }
}
