const debug = require("debug")("robots:server:errors");
const chalk = require("chalk");

const notFoundError = (req, res, next) => {
  res.status(404).json({ msg: "Any endpoint found" });
};

const generalError = (error, req, res, next) => {
  debug(chalk.red(error.message));
  res.status(500).json({ msg: "Server error" });
};

module.exports = { notFoundError, generalError };
