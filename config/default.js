'use strict';

var pkg = require('../package.json');

var config = {
  "kad": {
    "address": "0.0.0.0",
    "port": process.env.KADPORT || 35000,
    "seeds": [],
    "logLevel": 2
  },
  "express": {
    "port": process.env.PORT || 3000
  },
  "name": pkg.name
}

module.exports = config;
