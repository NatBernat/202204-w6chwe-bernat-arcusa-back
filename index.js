require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const { initializeServer } = require("./server/initializeServer");
const portApi = require("./cli/index");
const connectDB = require("./db/index");

(async () => {
  try {
    await connectDB(process.env.MONGO_STRING);
    await initializeServer(portApi);
    debug(chalk.green("Server initialized and DataBase connected"));
  } catch {
    debug(chalk.red("DataBase not connected"));
  }
})();
