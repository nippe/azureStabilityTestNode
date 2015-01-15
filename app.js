var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();

app.use(favicon(__dirname + '/public/img/favicon.png'));

app.use(express.static(path.join(__dirname, '/../public')));

app.get("/", function(req,res) {
  res.send("Hello world!")
});

app.set('port', process.env.PORT || 3018);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});