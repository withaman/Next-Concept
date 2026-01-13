import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    isCompleted: {
      type: Boolean,
      default: false
    }
  }
);

// Prevent model overwrite error in Next.js
export default mongoose.models.todo || mongoose.model("todo", todoSchema);
