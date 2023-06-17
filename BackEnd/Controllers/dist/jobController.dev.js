"use strict";

//.............
//importing
//.............
var Job = require('../models/job.js');

var StatusCodes = require('http-status-codes');

var CustomError = require('../errors');

var checkPermissions = require('../utils/checkPermission.js');

var mongoose = require('mongoose');

var moment = require('moment'); //.............
//App.
//.............
//createJob


var createJob = function createJob(req, res) {
  var _req$body, position, company, job;

  return regeneratorRuntime.async(function createJob$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, position = _req$body.position, company = _req$body.company;

          if (!(!position || !company)) {
            _context.next = 3;
            break;
          }

          throw new CustomError.BadRequestError("Please provide all values");

        case 3:
          //middleware-auth
          req.body.createdBy = req.user.userId;
          _context.next = 6;
          return regeneratorRuntime.awrap(Job.create(req.body));

        case 6:
          job = _context.sent;
          res.status(StatusCodes.CREATED).json({
            job: job
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}; //GetAllJobs


var getAllJobs = function getAllJobs(req, res) {
  var _req$query, search, status, jobType, sort, queryObject, result, page, limit, skip, jobs, totalJobs, numOfPages;

  return regeneratorRuntime.async(function getAllJobs$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, search = _req$query.search, status = _req$query.status, jobType = _req$query.jobType, sort = _req$query.sort;
          queryObject = {
            createdBy: req.user.userId
          };

          if (status !== 'all') {
            queryObject.status = status;
          }

          if (jobType !== 'all') {
            queryObject.jobType = jobType;
          }

          if (search) {
            queryObject.position = {
              $regex: search,
              $options: 'i'
            };
          }

          result = Job.find(queryObject); //chain sort conditions

          if (sort === 'latest') {
            result = result.sort('-createdAt');
          }

          if (sort === 'oldest') {
            result = result.sort('createdAt');
          }

          if (sort === 'a-z') {
            result = result.sort('position');
          }

          if (sort === 'z-a') {
            result = result.sort('-position');
          } //setup pagination


          page = Number(req.query.page) || 1;
          limit = Number(req.query.limit) || 10;
          skip = (page - 1) * limit;
          result = result.skip(skip).limit(limit);
          _context2.next = 16;
          return regeneratorRuntime.awrap(result);

        case 16:
          jobs = _context2.sent;
          _context2.next = 19;
          return regeneratorRuntime.awrap(Job.countDocuments(queryObject));

        case 19:
          totalJobs = _context2.sent;
          numOfPages = Math.ceil(totalJobs / limit);
          res.status(StatusCodes.OK).json({
            jobs: jobs,
            totalJobs: totalJobs,
            numOfPages: numOfPages
          });

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //updateJob


var updateJob = function updateJob(req, res) {
  var jobId, _req$body2, company, position, job, updateJob;

  return regeneratorRuntime.async(function updateJob$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          jobId = req.params.id;
          _req$body2 = req.body, company = _req$body2.company, position = _req$body2.position;

          if (!(!company || !position)) {
            _context3.next = 4;
            break;
          }

          throw new CustomError.BadRequestError('Please provide all values');

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(Job.findOne({
            _id: jobId
          }));

        case 6:
          job = _context3.sent;

          if (job) {
            _context3.next = 9;
            break;
          }

          throw new CustomError.NotFoundError("No job with id:".concat(jobId));

        case 9:
          //check permission
          // console.log(typeof req.user.userId)
          // console.log(typeof job.createdBy)
          checkPermissions(req.user, job.createdBy);
          _context3.next = 12;
          return regeneratorRuntime.awrap(Job.findByIdAndUpdate({
            _id: jobId
          }, req.body, {
            "new": true,
            runValidators: true
          }));

        case 12:
          updateJob = _context3.sent;
          res.status(StatusCodes.OK).json({
            updateJob: updateJob
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //DeleteJob


var deleteJob = function deleteJob(req, res) {
  var jobId, job;
  return regeneratorRuntime.async(function deleteJob$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          jobId = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Job.findByIdAndRemove({
            _id: jobId
          }));

        case 3:
          job = _context4.sent;

          if (job) {
            _context4.next = 6;
            break;
          }

          throw new CustomError.NotFoundError("No job with id: ".concat(jobId));

        case 6:
          checkPermissions(req.user, job.createdBy);
          res.status(StatusCodes.OK).json({
            msg: 'Success, Job removed'
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //showStats


var showStats = function showStats(req, res) {
  var stats, defaultStats, monthlyApplications;
  return regeneratorRuntime.async(function showStats$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Job.aggregate([{
            $group: {
              _id: '$status',
              count: {
                $sum: 1
              }
            }
          }]));

        case 2:
          stats = _context5.sent;
          stats = stats.reduce(function (acc, curr) {
            var title = curr._id,
                count = curr.count;
            acc[title] = count;
            return acc;
          }, {});
          defaultStats = {
            pending: stats.pending || 0,
            interview: stats.interview || 0,
            declined: stats.declined || 0
          };
          _context5.next = 7;
          return regeneratorRuntime.awrap(Job.aggregate([{
            $group: {
              _id: {
                year: {
                  $year: '$createdAt'
                },
                month: {
                  $month: '$createdAt'
                }
              },
              count: {
                $sum: 1
              }
            }
          }, {
            $sort: {
              '_id.year': -1,
              '_id.month': -1
            }
          }, {
            $limit: 6
          }]));

        case 7:
          monthlyApplications = _context5.sent;
          monthlyApplications = monthlyApplications.map(function (item) {
            var _item$_id = item._id,
                year = _item$_id.year,
                month = _item$_id.month,
                count = item.count;
            var data = moment().month(month - 1).year(year).format('MMM Y');
            return {
              data: data,
              count: count
            };
          }).reverse();
          res.status(StatusCodes.OK).json({
            defaultStats: defaultStats,
            monthlyApplications: monthlyApplications
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  });
}; //.............
//exporting
//.............


module.exports = {
  createJob: createJob,
  deleteJob: deleteJob,
  getAllJobs: getAllJobs,
  updateJob: updateJob,
  showStats: showStats
};