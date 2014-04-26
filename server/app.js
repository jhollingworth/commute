var express = require('express');
var http = require('http');
var helpers = require('./lib/helpers');
var configure = require('./config');
var app = express();

configure(app);

app.get('/', require('./routes/index'));
app.get('/timetable', require('./routes/timetable'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server running at http://localhost:' + app.get('port'));
});


