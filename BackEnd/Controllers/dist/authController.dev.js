"use strict";

//.........
//importing
//.........
var User = require('../models/user.js');

var StatusCodes = require('http-status-codes');

var CustomError = require('../errors'); //....
//app
//....
//register


var registerUser = function registerUser(req, res) {
  var _req$body, name, email, password, emailAlreadyExists, user, token;

  return regeneratorRuntime.async(function registerUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //anyDataNotFound
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;

          if (!(!name || !email || !password)) {
            _context.next = 3;
            break;
          }

          throw new CustomError.BadRequestError('Please provide all values');

        case 3:
          if (!(password.length < 6)) {
            _context.next = 5;
            break;
          }

          throw new CustomError.BadRequestError('Please increase the password');

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 7:
          emailAlreadyExists = _context.sent;

          if (!emailAlreadyExists) {
            _context.next = 10;
            break;
          }

          throw new CustomError.BadRequestError('Email already exists');

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(User.create({
            name: name,
            email: email,
            password: password
          }));

        case 12:
          user = _context.sent;
          //jwt
          token = user.createJWT(); //response

          res.status(StatusCodes.CREATED).json({
            user: {
              name: user.name,
              email: user.email,
              lastName: user.lastName,
              location: user.location
            },
            token: token,
            location: user.location
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}; //login


var loginUser = function loginUser(req, res) {
  var _req$body2, email, password, user, isPasswordCorrect, token;

  return regeneratorRuntime.async(function loginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;

          if (!(!email || !password)) {
            _context2.next = 3;
            break;
          }

          throw new CustomError.BadRequestError('Please provide all values');

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }).select('+password'));

        case 5:
          user = _context2.sent;

          if (user) {
            _context2.next = 8;
            break;
          }

          throw new CustomError.UnauthenticatedError('Invalid Credentials');

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(user.comparePassword(password));

        case 10:
          isPasswordCorrect = _context2.sent;

          if (isPasswordCorrect) {
            _context2.next = 13;
            break;
          }

          throw new CustomError.UnauthenticatedError('Invalid Credentials');

        case 13:
          //createJWT
          token = user.createJWT(); //displayPassword

          user.password = undefined;
          res.status(StatusCodes.OK).json({
            user: user,
            token: token,
            location: user.location
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //updateUser


var updateUser = function updateUser(req, res) {
  var _req$body3, name, email, lastName, location, user, token;

  return regeneratorRuntime.async(function updateUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, name = _req$body3.name, email = _req$body3.email, lastName = _req$body3.lastName, location = _req$body3.location;

          if (!(!name || !email || !lastName || !location)) {
            _context3.next = 3;
            break;
          }

          throw new CustomError.BadRequestError('Please provide all values');

        case 3:
          _context3.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user.userId
          }));

        case 5:
          user = _context3.sent;
          user.name = name;
          user.email = email;
          user.lastName = lastName;
          user.location = location;
          _context3.next = 12;
          return regeneratorRuntime.awrap(user.save());

        case 12:
          token = user.createJWT();
          res.status(StatusCodes.OK).json({
            user: user,
            token: token,
            location: user.location
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //.........
//exporting
//.........


module.exports = {
  registerUser: registerUser,
  loginUser: loginUser,
  updateUser: updateUser
};