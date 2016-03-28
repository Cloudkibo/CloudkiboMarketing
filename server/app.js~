/**
 * Main application file
 */

'use strict';

var express = require('express');
var config = require('./config/environment');
var http = require('http');

var fs = require('fs');

// Setup server
var httpapp = express();
var app = express();

var options = {
  ca: fs.readFileSync('server/security/gd_bundle-g2-g1.crt'),
  key: fs.readFileSync('server/security/server.key'),
  cert: fs.readFileSync('server/security/d499736eb44cc97a.crt')
};


var server = require('http').createServer(httpapp);
var httpsServer = require('https').createServer(options, app);



httpapp.get('*',function(req,res){
  res.redirect('https://www.cloudkibo.com'+req.url)
});

require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
  // Start server
  server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });

  httpsServer.listen(config.secure_port, function(){
    console.log('Express server listening on %d, in %s mode', config.secure_port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
