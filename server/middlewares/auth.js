require("dotenv").config();
const jtw = require("jsonwebtoken");

/* const jwt = require("jsonwebtoken"); */

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization.replace("Bearer ", "");

  const { id } = jtw.verify(token, process.env.JWT_SECRET);

  req.userId = id;

  next();
};

module.exports = auth;
