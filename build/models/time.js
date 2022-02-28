"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _mark = _interopRequireDefault(require("./mark"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Time = _database.sequelize.define("time", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  start_date: {
    type: _sequelize["default"].DATE
  },
  end_date: {
    type: _sequelize["default"].DATE
  },
  duration: {
    type: _sequelize["default"].DOUBLE
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Time.hasMany(_mark["default"], {
  foreingKey: "time_id",
  sourceKey: "id"
});

_mark["default"].belongsTo(Time, {
  foreingKey: "time_id",
  sourceKey: "id"
});

var _default = Time;
exports["default"] = _default;