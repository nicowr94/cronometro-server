"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimes = exports.createTime = void 0;

var _time = _interopRequireDefault(require("../models/time"));

var _mark = _interopRequireDefault(require("../models/mark"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTime = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, start_date, end_date, duration, marks, durationSec, newTime, markIdtime, newsMarks;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, start_date = _req$body.start_date, end_date = _req$body.end_date, duration = _req$body.duration, marks = _req$body.marks;
            durationSec = duration.h * 60 * 60 + duration.m * 60 + duration.s + duration.ms / 100;
            _context.prev = 2;
            _context.next = 5;
            return _time["default"].create({
              start_date: start_date,
              end_date: end_date,
              duration: durationSec.toFixed(3)
            });

          case 5:
            newTime = _context.sent;

            if (newTime) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(500).json({
              message: "Somethign goes wrong"
            }));

          case 8:
            markIdtime = marks.map(function (m) {
              return Object.assign({}, m, {
                time_id: newTime.id
              });
            });
            _context.next = 11;
            return _mark["default"].bulkCreate(markIdtime, {
              returning: ['id"', "start_date", "end_date", "time_id"]
            });

          case 11:
            newsMarks = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              message: "Time created successfully",
              data: newTime
            }));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              message: "Somethign goes wrong"
            }));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 15]]);
  }));

  return function createTime(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTime = createTime;

var getTimes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var times;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _time["default"].findAll();

          case 2:
            times = _context2.sent;
            res.status(201).json(times);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTimes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTimes = getTimes;