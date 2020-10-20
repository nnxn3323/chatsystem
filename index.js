var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/static', express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

const http = require("http");
setInterval(function () {
  http.get("http://chattingdoumi.herokuapp.com");
}, 600000);

app.get('/', function(req, res) {
    res.send('hw,world');
  });
  
  
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });