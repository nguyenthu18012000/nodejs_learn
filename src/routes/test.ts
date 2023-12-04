const express = require("express");
const router = express.Router();

const testController = require("../app/controllers/TestController");

router.use("/ccc", testController.index);
router.post("/cccs/:id", testController.indexs);

module.exports = router;
