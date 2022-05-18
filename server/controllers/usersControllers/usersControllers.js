require("dotenv").config();
const bcrypt = require("bcrypt");
const debug = require("debug")("robots:server:usersControllers");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");
const User = require("../../../db/models/User");
const encryptedPassword = require("../../utils/encryptPasword");

const userLogin = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    const error = new Error("Username or password are wrong.");
    error.code = 403;
    next(error);
  } else {
    const userData = {
      username: user.username,
    };
    const checkedPassword = await bcrypt.compare(password, user.password);

    if (!checkedPassword) {
      const error = new Error("Username or password are wrong");
      code.error = 403;
      next(error);
    } else {
      const token = jwt.sign(userData, process.env.JWT_SECRET);
      res.json({ token });
    }
  }
};

const userRegister = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user) {
    const error = await new Error("User already exists");
    error.statusCode = 403;
    error.customMessage = "User already exists";

    /* res.status(403).json({ msg: "User already exists" }); */
    next(error);
  } else {
    const rightPassword = await encryptedPassword(password);

    const userData = {
      username: username,
      password: rightPassword,
    };
    debug(chalk.blue(`User '${userData.username}' created`));
    await User.create(userData);
    res.json({ userData });
  }
};

module.exports = { userLogin, userRegister };
