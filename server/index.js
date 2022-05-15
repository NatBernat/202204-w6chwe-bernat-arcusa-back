const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const debug = require("debug");
const robotsRouter = require("./routers/robotsRouters");
const { notFoundError, generalError } = require("./middlewares/errors");

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);

app.use(generalError);

module.exports = { app };
