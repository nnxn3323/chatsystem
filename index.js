const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.send('얼촙니당!');
});
app.use('/static', express.static(__dirname + '/public'));

const http = require("http");
setInterval(function () {
  http.get("http://서버주소.herokuapp.com");
}, 600000);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('Server is working : PORT - ',port);
});
