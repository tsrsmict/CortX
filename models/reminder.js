import mongoose from "mongoose";

const ReminderSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    reminderName: { type: String, default: "Reminder", required: true },
    desc: String,
    type: { type: String, default: "Custom" },
    recurring: { type: String },
    createdAt: { type: Date, default: Date.now, required: true },
    datetime: { type: Date, required: true },
  },
  { collection: "reminders" }
);

const Reminder = mongoose.model("Reminder", ReminderSchema);

export default Reminder;
