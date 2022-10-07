const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: " User",
    },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    dateAndTime: { type: Date, required: true },
    content: { type: String, required: true },
  },
  { collection: "reminders" }
);

const Reminder = mongoose.model("Reminder", ReminderSchema);

export default Reminder;
