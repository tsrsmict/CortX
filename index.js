// Lib imports
import express from "express";
import * as http from "http";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import { MailTransporter } from "./lib/mailer.js";

import * as jwt from "jsonwebtoken";

import jsonwebtoken from "jsonwebtoken";
import { validate } from "email-validator";
import bcrypt from "bcryptjs";

import recognize from "./lib/TesseractDetect.js";

// await recognize("file.png").then((res) => console.log(res));
// App init
const app = express();
dotenv.config();

// react file handler
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

// DB connection
mongoose
  .connect(process.env.HEALTHCARE_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// Route setup
import userRouter from "./routes/userRouter.js";
app.use("/api/users/", userRouter);

import reminderRouter from "./routes/reminderRouter.js";
app.use("/api/reminders/", reminderRouter);

// ejs view engine
app.set("view engine", "ejs");

// middleware setup
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
const server = http.Server(app);

app.use(express.static("public"));
app.use("/assets", express.static("assets"));

// Root route

// const transporter = new MailTransporter("smtp.ethereal.email", "587", "joyce.nikolaus@ethereal.email", "Wd5ygyRUWkhNYbUxyx", false)
// transporter.send("healthcare", "sahnivarun62@gmail.com", "yo", "yo")
// transporter.send("<joyce.nikolaus@ethereal.email> healthcare", "sahnivarun62@gmail.com", "yo", "yo")

const listener = server.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on ${listener.address().port}`);
  }
});
