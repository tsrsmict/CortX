// Module imports
import express, { application } from "express";
import { Router } from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import { validate } from "email-validator";
import bcrypt from "bcryptjs";
import { v4 as uuidV4 } from "uuid";
import dayjs from "dayjs";
import User from "../models/user.js";
import ResetPassword from "../models/reset.js";
import cookieParser from "cookie-parser"
// Router setup
const userRouter = Router();
userRouter.use(express.json());
userRouter.use(cookieParser())
// Configure dotenv (default)
dotenv.config();


userRouter.get("/checkAuth", async (req, res) => {
  console.log("Auth check.")
      if (req.cookies.jwtToken == null)
      return res
        .status(400)
        .json({ auth: false });
    let cookie;
    try {
      cookie = jsonwebtoken.verify(req.cookies.jwtToken, process.env.JWT_SECRET);
      if (!(await User.exists({ _id: cookie.id })))
        return res
          .json({ auth: false });
    } catch (err) {
      return res
        .json({ auth: false });
}


return res.json({ auth: true })
})

// Login route
userRouter.post("/login", async (req, res) => {
  let { usermail, password: passwordPlain } = req.body;
  let user = null;
  if (!usermail || !passwordPlain) {
    return res.status(400).json({ status: "error", error: "Missing fields." });
  }

  if (validate(usermail)) {
    // input is an e-mail
    usermail = usermail.toLowerCase();
    if (typeof usermail !== "string") {
      return res.status(400).json({
        status: "error",
        error: "Invalid e-mail/username/password",
      });
    }
    user = await User.findOne({ email: usermail }).exec();
  } else {
    usermail = usermail;
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

  let hash = user["password"];
  if (await bcrypt.compare(passwordPlain, hash)) {
    // Found
    console.log("Logged in.");
    const token = jsonwebtoken.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET
    );

    res.cookie("jwtToken", token, {
      secure: process.env.NODE_ENV !== "dev",
      httpOnly: true,
      expires: dayjs().add(9999, "days").toDate(),
    });

    // Successful user login - token sent in reponse
    return res.status(200).json({ status: "ok", token: token });
  }
  return res.status(400).json({
    status: "error",
    error: "Invalid e-mail/username/password",
  });
});

// TODO:
// - actual reset password POST route
// - reminders
// - test upload

// Register route
userRouter.post("/register", async (req, res) => {
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
  let { username, email, password, confirmation } = req.body;
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
  let response;
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
      return res.status(409).json({
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
  res.cookie("jwtToken", token, {
    secure: process.env.NODE_ENV !== "dev",
    httpOnly: true,
    expires: dayjs().add(9999, "days").toDate(),
  });
  // Successful user login - token sent in reponse
  res.status(201).json({ status: "ok", token: token });
});

// Generate a new reset password - new resetID, and reference.
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
    if (typeof usermail !== "string") {
      return res.status(400).json({
        status: "error",
        error: "Invalid username/e-mail entered.",
      });
    }
    user = await User.findOne({ email: usermail }).exec();
  } else {
    usermail = usermail;
    user = await User.findOne({ username: usermail }).exec();
  }

  if (!user) {
    return res.status(403).json({
      status: "error",
      error: "User does not exist.",
    });
  }

  const userID = user[_id].valueOf();
  const resetID = uuidV4();

  const response = await ResetPassword.create({
    userID,
    resetURL,
  })
    .then((userID) => {
      console.log(`Created new 'Reset' for User (${userID})`);
    })
    .catch((err) => {
      console.log(err);
      return res.status(501).json({
        status: "error",
        error: "Something happened. Please contact the admin.",
      });
    });

  const resetMailId = response["_id"].valueOf();

  // TODO: sending mail
});



export default userRouter;
