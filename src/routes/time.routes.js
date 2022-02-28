import { Router } from "express";
const router = Router();

import { createTime, getTimes } from "../controllers/time.controller";
import { getMarksByIdTime } from "../controllers/mark.controller";

// create a time
router.post("/", createTime);
router.get("/alltime", getTimes);
router.get("/marks/:id", getMarksByIdTime);

module.exports = router;
