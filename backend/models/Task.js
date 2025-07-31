const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    category: {
      type: String,
      enum: ["Work", "Personal", "Study"],
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },
    dueDate: Date,
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // optional for now, for future expansion
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
