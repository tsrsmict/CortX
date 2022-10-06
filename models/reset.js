import mongoose from "mongoose";

const ResetSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    resetID: { type: String, required: true, unique: true },
  },
  { collection: "resets", timestamps: true }
);

const Reset = mongoose.model("Reset", ResetSchema);

export default Reset;
