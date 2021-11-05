var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
const path = require('path');
var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

server.listen(PORT, function() {
  console.log(`Website running on port ${PORT}`);
  console.log(`Directory: ${__dirname}`);
});