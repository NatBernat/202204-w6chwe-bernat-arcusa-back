require("dotenv").config();
const { initializeServer } = require("./server/initializeServer");
const { port } = require("./cli");

initializeServer(port || process.env.SERVER_PORT || 5000);
