"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarksByIdTime = void 0;

var _mark = _interopRequireDefault(require("../models/mark"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getMarksByIdTime = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, marks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            console.log(req.body);
            console.log(id);
            _context.prev = 3;
            _context.next = 6;
            return _mark["default"].findAll({
              attributes: ["start_date", "end_date", "time_id"],
              where: {
                time_id: id
              }
            });

          case 6:
            marks = _context.sent;
            res.status(201).json(marks);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));

  return function getMarksByIdTime(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMarksByIdTime = getMarksByIdTime;