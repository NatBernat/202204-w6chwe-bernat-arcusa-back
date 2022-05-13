const express = require("express");
const morgan = require("morgan");

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
    id: "627e96883ccb21d8cae171b3",
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

app.use((req, res, next) => {
  res.status(404).json({ msg: "Endpoint not found" });
});

app.use((error, req, res, next) => {
  debug(chalk.red(error.message));
  res.status(500).json({ msg: "Petardo" });
});

module.exports = { app };
