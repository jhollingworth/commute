var express = require('express');
var path = require('path');

module.exports = function config(app) {
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.set('views', path.join(__dirname, '..', 'views'));
    app.engine('html', require('ejs').renderFile);

    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }
}



