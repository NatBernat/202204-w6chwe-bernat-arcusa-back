const { program } = require("commander");

program.option("-p, --port <port>", "Port for the API");

program.parse();

const cliOptions = program.opts();

module.exports = cliOptions;
