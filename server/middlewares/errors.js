const debug = require("debug")("robots:server:errors");
const chalk = require("chalk");

const notFoundError = (req, res, next) => {
  res.status(404).json({ msg: "Any endpoint found" });
};

const generalError = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.customMessage ?? "General error";
  debug(chalk.red(errorMessage));
  res.status(statusCode).json(errorMessage);
};

module.exports = { notFoundError, generalError };
