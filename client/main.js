var $ = require('jquery');
var angular = require('angular');
var angularBootstrap = require('angular-bootstrap');
var app = angular.module('app', ['ui.bootstrap']);

require('./styles.less');

require('./search')(app);
require('./journey')(app);
require('./stations')(app);
require('./timetable')(app);

angular.bootstrap($('#app'), [app.name]);
