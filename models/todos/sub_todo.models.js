const mongoose = require("mongoose");

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: trusted,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const subTodo = mongoose.model("SubTodo", subTodoSchema);

module.exports = subTodo;
