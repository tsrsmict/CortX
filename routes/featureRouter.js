import express from "express";
import { Router } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import userRouter from "./userRouter";
import formatTesseract from "../lib/formatTesseract";
import recognize from "../lib/TesseractDetect";
import mongoose from "mongoose";
const featuresRouter = Router();
import User from "../models/user";
featuresRouter.use(express.json());
dotenv.config();

userRouter.post("/uploadFile", (req, res) => {
  //uploadFile
});

userRouter.get("/recognize", (req, res) => {
  const file =
    "https://cdn.discordapp.com/attachments/869440732753182801/1026485179570728970/unknown.png"; //get the file from mongoose
  recognize(file).then((res) => {
    ``;
  });
});
