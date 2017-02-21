var balance = require('./balance.js');

var message = balance.message();
var accountBalance = balance.balance;

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(message + accountBalance);
  res.end();
}).listen(3000);
