const express = require("express");
const userLogin = require("../../controllers/usersControllers/usersControllers");

const usersRouter = express.Router();

usersRouter.get("/login", userLogin);

module.exports = usersRouter;
