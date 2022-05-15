const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  speed: {
    type: Number,
  },
  resistance: {
    type: Number,
  },
  creation: {
    type: Number,
  },
});

const Robot = model("Robot", RobotSchema, "robots");
module.exports = Robot;
