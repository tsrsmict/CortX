import mongoose from "mongoose";

const ResetPasswordSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    resetID: { type: String, required: true },
    createdAt: { type: Date, expires: "180m", default: Date.now },
  },
  { collection: "resets" }
);

const ResetPassword = mongoose.model("ResetPassword", ResetPasswordSchema);

export default ResetPassword;
