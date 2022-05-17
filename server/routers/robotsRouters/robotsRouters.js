const express = require("express");
const {
  getRobots,
} = require("../../controllers/robotsControllers/robotsControllers");

const router = express.Router();

router.get("/", getRobots);

module.exports = router;
