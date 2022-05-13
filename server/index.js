const express = require("express");
const debug = require("debug")("robots:server");
const morgan = require("morgan");
const chalk = require("chalk");

const app = express();

const robots = [
  {
    id: { $oid: "627e96883ccb21d8cae171b3" },
    name: "Optimus Prime",
    image:
      "https://pm1.narvii.com/7617/0e3da39327724c32a5639bae88d64ad9c60dfecer1-752-1131v2_hq.jpg",
    speed: "5",
    resistance: "7",
    creation: { $date: { $numberLong: "94694400000" } },
  },
  {
    id: { $oid: "627e96883ccb21d8cae171b3" },
    name: "Optimus Prime",
    image:
      "https://pm1.narvii.com/7617/0e3da39327724c32a5639bae88d64ad9c60dfecer1-752-1131v2_hq.jpg",
    speed: "5",
    resistance: "7",
    creation: "1973",
  },
];

app.use(morgan("dev"));

app.use(express.json());

app.get("/robots", (req, res) => {
  res.status(200).json({ robots });
});

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.green(`Server listening on port ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.bgRed.white("Server error"));

    if (error.code === "EADDRINUSE") {
      debug(chalk.bgRed.white(`Port ${port} is busy`));
    }
  });
};

module.exports = { initializeServer, app };

