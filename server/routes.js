/**
 * Main application routes
 */

'use strict';

var express = require('express');
var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  app.route('/')
    .get(function(req, res) {
      console.log(req.get('host'));
      console.log('sojharo');
      if(req.get('host') == 'www.cloudkibo.com')
        res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
      else if(req.get('host') == 'www.kibosupport.com')
        res.sendFile(path.resolve(app.get('appPath2') + '/index.html'));
    });

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      console.log(req.get('host'));
      console.log('sojharo');
      if(req.get('host') == 'www.cloudkibo.com')
        res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
      else if(req.get('host') == 'www.kibosupport.com')
        res.sendFile(path.resolve(app.get('appPath2') + '/index.html'));
    });
};
