const mongoose = require("mongoose");

const ActivityLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  action: { type: String, required: true }, // CREATE / UPDATE / DELETE
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  details: String
});

module.exports = mongoose.model("ActivityLog", ActivityLogSchema);
