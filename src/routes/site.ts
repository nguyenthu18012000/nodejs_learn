const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get("/a/:id", siteController.index1);
router.use("/", siteController.index);

module.exports = router;
