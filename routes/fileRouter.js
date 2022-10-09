import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import checkUser from "../middlewares/checkUser.js";
import File from "../models/file.js";
import { log, Style } from "../devlibs/dev.js";
import User from "../models/user.js";
const fileRouter = express.Router();

fileRouter.use(express.json());
fileRouter.use(cookieParser());

const upload = multer();

const limitInMb = 5;

dotenv.config();
fileRouter.post(
  "/upload",
  [checkUser, upload.single("file")],
  async (req, res) => {
    // (x) - POST Layout
    // File itself as part of form
    // fileName (opt)
    // fileDesc (opt)
    try {
      if (!req.file || req.file == null || req.file == "") {
        return res.status(400).json("No file uploaded.");
      }
    } catch {
      return res.status(400).json("Invalid.");
    }

    if (req.file.size >= limitInMb * 1024 * 1024)
      return res.status(400).json("File size over 5MiB");

    const reqFile = req.file;
    let file = {};
    file.userID = req.checkData.id;
    file.name = req.body.fileName ? req.body.fileName : reqFile.originalname;
    file.type = reqFile.mimetype;
    if (req.body.fileDesc) {
      file.desc = req.body.fileDesc;
    }
    file.binData = reqFile.buffer;
    await File.create(file)
      .then((file) => {
        log(
          `${Style.cyan("FILE:")} ${Style.green(
            "New file uploaded."
          )} ${Style.yellow(`[UserID: ${req.checkData.id}]`)}`
        );

        // Push the reminderId into the users reminders field so it can be referenced and populated later
        User.findByIdAndUpdate(
          req.checkData.id,
          {
            $push: { files: file._id },
          },
          { new: true, upsert: true },
          (err, o) => {
            if (err) throw err;
            if (o)
              log(
                ` ${Style.greenBright.bold("X")} ${Style.cyan(
                  "FILE:"
                )} ${Style.green("Pushed successfully to USER")} ${Style.yellow(
                  `[${req.checkData.id}]`
                )}`
              );
          }
        );
        let displayData = {
          fileID: file._id,
          name: file.name,
          type: reqFile.mimetype,
          data: reqFile.buffer.slice(0, 50),
          userID: req.checkData.id,
          createdAt: file.createdAt,
        };

        return res.status(201).json(displayData);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json("Failure.");
      });
  }
);

fileRouter.get("/getAllFileDetails", checkUser, async (req, res) => {
  const userID = req.checkData.id;

  const files = await User.findOne({ _id: userID })
    .select("files")
    .populate("files", "name desc type");
  return res.json(files.files);
});

fileRouter.get("/getFile", checkUser, async (req, res) => {
  if (!req.query?.fileID) return res.status(400).json("No fileID provided.");
  let fileID = req.query.fileID;

  const file = await File.findOne({ _id: fileID });
  if (!file) return res.status(404).json("No file with this ID found.");

  if (req.checkData.id != file.userID)
    return res.status(403).json("File owner does not match requester ID.");

  // res.contentType(file.type);
  // res.send(file.binData);

  res.writeHead(200, {
    "Content-Type": file.type,
    "Content-disposition": "attachment;filename=" + file.name,
  });
  res.end(file.binData);
});

export default fileRouter;
