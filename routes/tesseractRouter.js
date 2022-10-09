import express from "express";
import recognize from "../lib/TesseractDetect";
import multer from "multer";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const tessearactRouter = express.Router();
tessearactRouter.use(cookieParser);
tessearactRouter.use(express.json());
dotenv.config();

const upload = multer();
