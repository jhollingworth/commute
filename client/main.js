var $ = require('jquery');
var angular = require('angular');
var app = angular.module('app', []);

require('./search')(app);
require('./stations')(app);

angular.bootstrap($('#app'), [app.name]);
