import express from "express";
import dotenv from "dotenv";
import checkUser from "../middlewares/checkUser.js";
import File from "../models/file.js";

const fileRouter = express.Router();
fileRouter.use(express.json());
fileRouter.use(cookieParser());

dotenv.config();
// await filepond config.
fileRouter.post("new", checkUser, (req, res) => {
  req.body.data;
});
