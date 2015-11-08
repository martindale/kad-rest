'use strict';

var config = require('config');
var log = require('./lib/log');
var express = require('express');
var app = express();
var api = require('./api/index');
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.get('/:hash', api.get);
app.put('/:hash', api.put);

//Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

var server = app.listen(config.get('express.port'));
log.info('Started express server on ' + config.get('express.port'));

function shutdown(){
  server.close(function() {
    log.info('Closed remaining http connections.');
    process.exit()
  });
}

process.on('uncaughtException', function errCb(err){
  log.error('Got uncaught exception: ' + err.stack);
  shutdown();
});

module.exports = app;
