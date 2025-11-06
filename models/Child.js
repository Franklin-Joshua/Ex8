import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true }
});

export default mongoose.model("Child", childSchema);
