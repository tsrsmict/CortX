import express from "express";
import Reminder from "../models/reminder.js";
import checkUser from "../middlewares/checkUser.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import User from "../models/user.js";
import { log, Style } from "../devlibs/dev.js";
// Router setup
const reminderRouter = express.Router();
reminderRouter.use(express.json());
reminderRouter.use(cookieParser());
// Configure dotenv (default)

reminderRouter.post("/new", checkUser, async (req, res) => {
  // (x) - POST Layout
  // reminderName (opt)
  // reminderDesc (opt)
  // reminderType (opt)
  // reminderDatetime
  // recurring (opt)
  if (!req.body.reminderDatetime)
    return res
      .status(400)
      .json({ status: "error", error: "No reminder date/time." });

  // Creating the reminder object with dynamic fields.
  let reminder = {};
  {
    reminder.userID = req.checkData.id;
    reminder.datetime = req.body.reminderDatetime;

    if (req.body.reminderName) {
      reminder.reminderName = req.body.reminderName;
    }

    if (req.body.reminderDesc) {
      reminder.desc = req.body.reminderDesc;
    }

    if (req.body.reminderType) {
      reminder.type = req.body.reminderType;
    }

    if (req.body.recurring) {
      reminder.recurring = req.body.recurring;
    }
  }

  await Reminder.create(reminder)
    .then((reminder) => {
      // Logging the userId for whom the reminder was created

      log(
        `${Style.blue("REMINDER:")} ${Style.green(
          "Created successfully."
        )} ${Style.yellow(`[UserID: ${req.checkData.id}]`)}`
      );

      // Push the reminderId into the users reminders field so it can be referenced and populated later
      User.findByIdAndUpdate(
        req.checkData.id,
        {
          $push: { reminders: reminder._id },
        },
        { new: true, upsert: true },
        (err, o) => {
          if (err) throw err;
          if (o)
            log(
              ` ${Style.greenBright.bold("X")} ${Style.blue(
                "REMINDER:"
              )} ${Style.green("Pushed successfully to USER")} ${Style.yellow(
                `[${req.checkData.id}]`
              )}`
            );
        }
      );

      // Successful post - created new reminder. Send back the reminder itself in response as JSON.
      return res.status(201).json({ reminder });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ status: "error", error: "What." });
    });
});

export default reminderRouter;
