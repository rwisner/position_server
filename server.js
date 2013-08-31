var http = require('http');
var url = require('url');

var latest = '';

var server = http.createServer(function (request, response) {
  var requestPath = url.parse(request.url).pathname;
  response.writeHead(200, {"Content-Type": "text/plain"});
  var parts = requestPath.split("/");
  if (parts[1] == 'save') {
    latest = parts[2] + ' ' + parts[3];
    response.end('OK\n');
  } else {
    response.end(latest);
  }
});

server.listen(5000);
