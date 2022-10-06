const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: " User",
    },
    type: { type: String, required: true },
    dateAndTime: { type: Date, required: true },
    content: { type: String, required: true },
  },
  { collection: "reminders", timestamps: true }
);

const Reminder = mongoose.model("Reminder", ReminderSchema);

export default Reminder;
