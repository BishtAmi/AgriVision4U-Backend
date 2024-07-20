const mongoose = require("mongoose");
const Task = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  dueDate: {
    required: false,
    type: Date,
  },
});
module.exports = mongoose.model("TaskData", Task);
