require("dotenv").config();
const { program } = require("commander");

program.option("-p --port <port>", "Insert port for the API");
program.parse();

const { port: newPort } = program.opts();

const portApi = newPort || process.env.PORT || 5000;

module.exports = portApi;
