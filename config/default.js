'use strict';

var pkg = require('../package.json');

var config = {
  "kad": {
    "address": "127.0.0.1",
    "port": 35000,
    "seeds": [],
    "logLevel": 2
  },
  "express": {
    "port": 3000
  },
  "instanceId": instanceId,
  "name": pkg.name
}

module.exports = config;
