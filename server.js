var express = require('express');
var app = express();

// Enable HTML template middleware
app.engine('html', require('ejs').renderFile);

// Enable static CSS styles
app.use(express.static('styles'));

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.render('index.html');
});

// start a server on port 80 and log its start to our console. Always use port 3000 for dev and port 80 in prod.
var server = app.listen(3000, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
