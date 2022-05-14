const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("robots:server");
const chalk = require("chalk");
const robotsRouter = require("./routers/robotsRouter");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", robotsRouter);

app.use((req, res, next) => {
  res.status(404).json({ msg: "Any endpoint found" });
});

app.use((error, req, res, next) => {
  debug(chalk.red(error.message));
  res.status(500).json({ msg: "Server error" });
});

module.exports = { app };
