const express = require("express");
const debug = require("debug")("robots:server");
const chalk = require("chalk");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(`server listening on port ${port}`);
  });

  server.on("error", (error) => {
    debug(chalk.bgRed.white("Server error"));

    if (error.code === "EADDRINUSE") {
      debug(chalk.bgRed.white(`Port ${port} is busy`));
    }
  });
};

module.exports = { initializeServer };
