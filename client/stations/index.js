module.exports = function(app) {
    app.service('stations', require('./stationsProvider'))
}
