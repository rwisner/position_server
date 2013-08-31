var express = require("express");
var app = express();
latest = new Object();

app.use(express.logger());

app.get('/', function(request, response) {
  response.json(latest);
});

app.get('/save/:lat/:lon', function(request, response) {
  latest.lat = request.params.lat;
  latest.lon = request.params.lon;
  latest.sec = new Date().getTime();
  response.send('OK');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
