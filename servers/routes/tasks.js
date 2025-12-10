const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getLogs
} = require("../controllers/taskController");

router.use(auth);

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/logs/all", getLogs);

module.exports = router;
