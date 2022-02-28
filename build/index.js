"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Settings
_app["default"].set("port", process.env.PORT || 4000); // handling errors


_app["default"].use(function (err, req, res, next) {
  return res.status(500).json({
    status: "error",
    message: err.message
  });
});

_app["default"].listen(_app["default"].get("port"));

console.log("Server on port", _app["default"].get("port"));