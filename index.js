require("dotenv").config();
const { initializeServer } = require("./server");
const { port } = require("./cli");

initializeServer(port || process.env.SERVER_PORT || 5000);
