var fs = require('fs');
var SearchController = require('./searchController');
var template = fs.readFileSync(__dirname + '/searchTemplate.html', 'utf-8');

function SearchDirective() {
    return {
        restrict: 'EA',
        template: template,
        controller: SearchController
    }
}

SearchDirective.$inject = [];

module.exports = SearchDirective;
