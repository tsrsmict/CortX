// Lib imports
import express from "express";
import * as http from "http";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { MailTransporter } from "./lib/mailer.js";
import jsonwebtoken from "jsonwebtoken";
import { validate } from "email-validator";
import bcrypt from "bcryptjs";

// Model imports
import User from "./models/user.js";

// App init
const app = express();
dotenv.config();

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

// app.set('view engine', 'ejs')

// middleware setup
app.use(express.json());
const server = http.Server(app);

app.use(express.static("public"));
app.use("/assets", express.static("assets"));

const cookieAge = 3; // in days

// Root route
app.get("/", (req, res) => {
  res.json("yo");
});

// const transporter = new MailTransporter("smtp.ethereal.email", "587", "joyce.nikolaus@ethereal.email", "Wd5ygyRUWkhNYbUxyx", false)
// transporter.send("<joyce.nikolaus@ethereal.email> healthcare", "sahnivarun62@gmail.com", "yo", "yo")

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  if (
    !req.body.username ||
    !req.body.email ||
    !req.body.password ||
    !req.body.confirmation
  ) {
    return res.json({ status: "error", error: "Missing fields." });
  }

  var { username, email, password, confirmation } = req.body;
  email = email.toLowerCase();

  if (typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username." });
  }

  if (!validate(email)) {
    return res.json({ status: "error", error: "Invalid E-mail" });
  }

  if (!(password.length >= 7)) {
    return res.json({
      status: "error",
      error: "Password is too small. Should be atleast 7 characters.",
    });
  }

  if (password != confirmation) {
    return res.json({ status: "error", error: "Passwords don't match." });
  }
  var response;
  try {
    response = await User.create({
      username,
      email,
      password,
    });
    console.log("User created successfully " + response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate username or e-mail
      return res.json({
        status: "error",
        error: "Username/E-mail already in use.",
      });
    }
    throw error;
  }

  const token = jsonwebtoken.sign(
    { id: response._id, username: response.username },
    process.env.JWT_SECRET
  );

  res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 * cookieAge });
  res.json({ status: 200 });
});

app.post("/api/login", async (req, res) => {
  var { usermail, password: passwordPlain } = req.body;
  var user = null;
  if (!usermail || !passwordPlain) {
    return res.json({ status: "error", error: "Missing fields." });
  }

  if (validate(usermail)) {
    // input is an e-mail
    usermail = usermail.toLowerCase();
    console.log(usermail);
    if (typeof usermail !== "string") {
      return res.json({
        status: "error",
        error: "Invalid e-mail/username/password",
      });
    }
    user = await User.findOne({ email: usermail }).exec();
  } else {
    usermail = usermail;
    console.log(usermail);
    user = await User.findOne({ username: usermail }).exec();
  }

  if (!user) {
    return res.json({
      status: "error",
      error: "Invalid e-mail/username/password",
    });
  }

  console.log(user);

  var hash = user["password"];
  console.log(hash);
  if (await bcrypt.compare(passwordPlain, hash)) {
    // Found
    console.log("Logged in.");
    const token = jsonwebtoken.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET
    );
    res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 * cookieAge });
    return res.json({ status: "ok", data: token });
  }
  return res.json({
    status: "error",
    error: "Invalid e-mail/username/password",
  });
});

const listener = server.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on ${listener.address().port}`);
  }
});
