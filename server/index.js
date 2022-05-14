const express = require("express");
const morgan = require("morgan");
const robotsRouter = require("./routers/robotsRouter");
const { notFoundError, generalError } = require("./middlewares/errors");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);

app.use(generalError);

module.exports = { app };
