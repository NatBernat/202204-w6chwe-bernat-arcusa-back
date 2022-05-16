const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const debug = require("debug");
const robotsRouter = require("./routers/robotsRouters");
const { notFoundError, generalError } = require("./middlewares/errors");
const auth = require("./middlewares/auth");

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", auth, robotsRouter);

app.use(notFoundError);

app.use(generalError);

module.exports = { app };
