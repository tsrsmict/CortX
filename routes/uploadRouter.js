import express from "express";
import dotenv from "dotenv";
import User from "../models/user.js";

import cookieParser from "cookie-parser";

const uploadRouter = express.Router();
uploadRouter.use(express.json());
uploadRouter.use(cookieParser());

dotenv.config();

const checkUser = async (cookie) => {
  const cookie_ = jsonwebtoken.verify(cookie, process.env.JWT_SECRET);
  if (!(await User.exists({ _id: cookie_.id }))) return [false];
  return [true, cookie_];
};
