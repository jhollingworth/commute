require('./search.less');
module.exports = function(app) {
    app.directive('search', require('./searchDirective'));
}
