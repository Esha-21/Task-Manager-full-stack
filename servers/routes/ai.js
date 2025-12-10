const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/suggest", auth, (req, res) => {
  const desc = req.body.description || "";
  const title =
    desc.split(" ").slice(0, 6).join(" ").replace(/(^\w|\s\w)/g, m => m.toUpperCase()) ||
    "New Task";

  res.json({ title });
});

module.exports = router;
