require("dotenv").config();
const mongoose = require("mongoose");
const debug = require("debug")("robots:db:root");
const chalk = require("chalk");

const connectDB = async (connectionsString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionsString, (error) => {
      if (error) {
        debug(chalk.red("DataBase error"));
        reject();
        return;
      }
      debug(chalk.green("Connected to DataBase"));
      resolve();
    });
  });

connectDB(process.env.MONGO_STRING);

module.exports = connectDB;
