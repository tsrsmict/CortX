import express from "express";
import dotenv from "dotenv";
import Corto from "../models/corto";
import User from "../models/user";
import { auth } from "../middleware/auth";
import cookieParser from "cookie-parser";
import checkUser from "../middlewares/checkUser.js";
dotenv.config();

const cortoRouter = express.Router();
cortoRouter.use(express.json());
cortoRouter.use(cookieParser());

cortoRouter.post("/new", checkUser, async (req, res) => {
    const user = await User.findById(req.checkData.id);
});

export default cortoRouter;
