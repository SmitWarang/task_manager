const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const protect = require("../middleware/authMiddleware");

router.use(protect);

router.post("/", taskController.createTask);
router.get("/", protect, taskController.getTasks);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.patch("/:id/complete", taskController.toggleComplete);

module.exports = router;
