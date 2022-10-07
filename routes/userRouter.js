// Module imports
import express, { application } from "express";
import { Router } from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import { validate } from "email-validator";
import bcrypt from "bcryptjs";

import User from "../models/user.js";
import Reset from "../models/reset.js";

const cookieAge = 5000; // in days

// Router setup
const userRouter = Router();
userRouter.use(express.json());

// Configure dotenv (default)
dotenv.config();

// Login route
userRouter.post("/login", async (req, res) => {
  var { usermail, password: passwordPlain } = req.body;
  var user = null;
  if (!usermail || !passwordPlain) {
    return res.status(400).json({ status: "error", error: "Missing fields." });
  }

  if (validate(usermail)) {
    // input is an e-mail
    usermail = usermail.toLowerCase();
    console.log(usermail);
    if (typeof usermail !== "string") {
      return res.status(400).json({
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
    return res.status(400).json({
      status: "error",
      error: "Invalid e-mail/username/password",
    });
  }

  // Log the user - TODO: Delete later for security
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

    // Successful user login - token sent in reponse
    return res.status(200).json({ status: "ok", token: token });
  }
  return res.status(400).json({
    status: "error",
    error: "Invalid e-mail/username/password",
  });
});

// Register route
userRouter.post("/register", async (req, res) => {
  console.log(req.body);

  // Make sure all inputs are existing
  if (
    !req.body.username ||
    !req.body.email ||
    !req.body.password ||
    !req.body.confirmation
  ) {
    return res.status(400).json({ status: "error", error: "Missing fields." });
  }

  // Getting req body values
  var { username, email, password, confirmation } = req.body;
  email = email.toLowerCase();

  if (typeof username !== "string") {
    return res
      .status(400)
      .json({ status: "error", error: "Invalid username." });
  }

  // Validate the E-mail address
  if (!validate(email)) {
    return res.status(400).json({ status: "error", error: "Invalid E-mail" });
  }

  // Making sure the password is above 7 characters
  // TODO: MAKE MORE SECURE.
  if (!(password.length >= 7)) {
    return res.status(400).json({
      status: "error",
      error: "Password is too small. Should be atleast 7 characters.",
    });
  }

  if (password != confirmation) {
    return res
      .status(400)
      .json({ status: "error", error: "Passwords don't match." });
  }
  var response;
  try {
    response = await User.create({
      username,
      email,
      password,
    });

    // Logging new user - TODO: remove 'response' for security
    console.log("User created successfully " + response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate username or e-mail
      return res.status(400).json({
        status: "error",
        error: "Username/E-mail already in use.",
      });
    }
    throw error;
  }

  // Sign JWT token and store it in 'token'
  const token = jsonwebtoken.sign(
    { id: response._id, username: response.username },
    process.env.JWT_SECRET
  );

  // Successful user login - token sent in reponse
  res.status(200).json({ status: "ok", token: token });
});

// Gen new password reset
userRouter.post("/password/newReset", async (req, res) => {
  if (!req.body.usermail) {
    return res
      .status(400)
      .json({ status: "error", error: "Missing username/e-mail address." });
  }

  const usermail = req.body.usermail;
  let user;
  if (validate(usermail)) {
    // input is an e-mail
    usermail = usermail.toLowerCase();
    console.log(usermail);
    if (typeof usermail !== "string") {
      return res.status(400).json({
        status: "error",
        error: "Invalid username/e-mail entered.",
      });
    }
    user = await User.findOne({ email: usermail }).exec();
  } else {
    usermail = usermail;
    console.log(usermail);
    user = await User.findOne({ username: usermail }).exec();
  }

  if (!user) {
    return res.status(400).json({
      status: "error",
      error: "User does not exist.",
    });
  }

  let reset = Reset.create({});
});

export default userRouter;
