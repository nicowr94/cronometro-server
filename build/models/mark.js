"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mark = _database.sequelize.define("mark", {
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
  time_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Mark;
exports["default"] = _default;