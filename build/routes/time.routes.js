"use strict";

var _express = require("express");

var _time = require("../controllers/time.controller");

var _mark = require("../controllers/mark.controller");

var router = (0, _express.Router)();
// create a time
router.post("/", _time.createTime);
router.get("/alltime", _time.getTimes);
router.get("/marks/:id", _mark.getMarksByIdTime);
module.exports = router;