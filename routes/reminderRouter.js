import express from "express";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
import Reminder from "../models/reminder.js";

import cookieParser from "cookie-parser";

// Router setup
const reminderRouter = express.Router();
reminderRouter.use(express.json());
reminderRouter.use(cookieParser());
// Configure dotenv (default)
dotenv.config();

const checkUser = async (cookie) => {
  const cookie_ = jsonwebtoken.verify(cookie, process.env.JWT_SECRET);
  if (!(await User.exists({ _id: cookie_.id }))) return [false];
  return [true, cookie_];
};

reminderRouter.post("/new", async (req, res) => {
  // (x) - POST Layout
  // reminderName (opt)
  // reminderDesc (opt)
  // reminderType (opt)
  // reminderDatetime
  // recurring (opt)
  if (req.cookies.jwtToken == null)
    return res
      .status(400)
      .json({ status: "error", error: "No jwtToken in cookies." });

  if (!req.body.reminderDatetime)
    return res
      .status(400)
      .json({ status: "error", error: "No reminder date/time." });

  let {
    reminderName,
    reminderDesc,
    reminderType,
    reminderDatetime,
    recurring,
  } = req.body;

  const user = await checkUser(req.cookies.jwtToken);
  if (!user[0])
    return res
      .status(400)
      .json({ status: "error", error: "User failed check." });

  const reminder = await Reminder.create({
    userID: user[1].id,
    reminderName: reminderName,
    desc: reminderDesc,
    recurring: recurring,
    type: reminderType,
    datetime: reminderDatetime,
  })
    .then((reminder) => {
      console.log(`Reminder created ${reminder}`);
      return res.status(201).json({ reminder });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ status: "error", error: "What." });
    });
});

export default reminderRouter;
