"use strict";

//........
//import
//........
require('dotenv').config();

var mockData = require('./mock-data.json');

var Job = require('./models/job.js');

var connectDB = require('./db/connect.js'); //........
//APP..
//........


var start = function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(connectDB(process.env.MONGO_URL));

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(Job.create(mockData));

        case 5:
          console.log('Success....');
          process.exit(0);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          process.exit(1);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

start();