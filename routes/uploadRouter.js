import express from "express";
import { Router } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import userRouter from "./userRouter";
import recognize from "../lib/TesseractDetect";
import mongoose from "mongoose";
const featuresRouter = Router();
import User from "../models/user";
featuresRouter.use(express.json());
dotenv.config();

userRouter.post("/uploadFile", (req, res) => {
  //uploadFile
});
//TODO make upload, and push back (parsed data - done, pushing left)
userRouter.get("/recognize", (req, res) => {
  const file =
    "https://cdn.discordapp.com/attachments/869440732753182801/1026485179570728970/unknown.png"; //TODO   - get the file from mongoose
  recognize(file).then((arr) => {
    var json_object = {
      headers: [],
      type: [],
      value: [],
      unit: [],
      interval: [],
    };
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        if (i == 0) {
          json_object.headers.push(arr[i][j]);
        } else {
          if (j == 0) {
            json_object.type.push(arr[i][j]);
          } else if (j == 1) {
            json_object.value.push(arr[i][j]);
          } else if (j == 2) {
            json_object.unit.push(arr[i][j]);
          } else if (j == 3) {
            json_object.interval.push(arr[i][j]);
          }
        }
      }
    }
    return json_object;
  });
});

uploadRouter.post("/pushToDB", (req, res) => {
  //push to db
});
