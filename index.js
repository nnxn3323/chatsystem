const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.send('asdfasdf');
});
app.use('/static', express.static(__dirname + '/public'));


app.listen(8080, function () {
  console.log('Server is working : PORT - ');
});
