const bcrypt = require("bcrypt");

const encryptedPassword = (password) => bcrypt.hash(password, 10);

module.exports = encryptedPassword;
