const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const robotsRouter = require("./routers/robotsRouters/robotsRouters");
const { notFoundError, generalError } = require("./middlewares/errors");
const auth = require("./middlewares/auth");
const usersRouter = require("./routers/usersRouters/usersRouters");

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());

app.use("/users", usersRouter);
app.use("/robots", auth, robotsRouter);

app.use(notFoundError);

app.use(generalError);

module.exports = app;
