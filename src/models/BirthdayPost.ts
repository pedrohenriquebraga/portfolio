import mongoose from "mongoose";

const BirthdayPostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true })

export default mongoose.models.BirthdayPost || mongoose.model("BirthdayPost", BirthdayPostSchema);