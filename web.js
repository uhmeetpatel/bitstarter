var express = require('express');
var fs = require('fs');
var infile = "./index.html";
var inbuf = fs.readFileSync(infile);
//console.log(inbuf.toString('ascii'));
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(inbuf.toString('ascii'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
