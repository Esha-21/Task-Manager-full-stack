const Task = require("../models/Task");
const ActivityLog = require("../models/ActivityLog");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, createdBy: req.user.id });

    await ActivityLog.create({
      user: req.user.id,
      action: "CREATE",
      taskId: task._id,
      details: `Created task: ${task.title}`
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.id }).sort({
      createdAt: -1
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      req.body,
      { new: true }
    );

    await ActivityLog.create({
      user: req.user.id,
      action: "UPDATE",
      taskId: updated._id,
      details: `Updated task: ${updated.title}`
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id
    });

    await ActivityLog.create({
      user: req.user.id,
      action: "DELETE",
      taskId: deleted._id,
      details: `Deleted task: ${deleted.title}`
    });

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const logs = await ActivityLog.find({ user: req.user.id }).sort({
      timestamp: -1
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};
