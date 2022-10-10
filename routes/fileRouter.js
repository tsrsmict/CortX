import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import checkUser from "../middlewares/checkUser.js";
import File from "../models/file.js";
import { log, Style } from "../devlibs/dev.js";
import User from "../models/user.js";
import mime from "mime-types";
import TesseractDetect from "../lib/TesseractDetect.js";
import path from "path";

const fileRouter = express.Router();

fileRouter.use(express.json());
fileRouter.use(cookieParser());

const upload = multer();

const limitInMb = 5;
const types = [
  "medicalRecords",
  "prescriptions",
  "bloodTestsAndReports",
  "bodyScansAndXrays",
  "insurance",
  "vaccination",
];

dotenv.config();
fileRouter.post(
  "/upload",
  [checkUser, upload.single("file")],
  async (req, res) => {
    // (x) - POST Layout
    // File itself as part of form
    // fileName (opt)
    // fileDesc (opt)
    // fileCategory

    // Categories:
    // medicalRecords, prescriptions, bloodTestsAndReports, bodyScansAndXrays, insurance, vaccination

    try {
      if (!req.file || req.file == null || req.file == "") {
        return res.status(400).json("No file uploaded.");
      }
    } catch {
      return res.status(400).json("Invalid.");
    }

    if (req.file.size >= limitInMb * 1024 * 1024)
      return res.status(400).json("File size over 5MiB");

    if (!types.includes(req.body.fileCategory)) {
      console.log(req.body.fileCategory);
      return res.status(400).json("File category not correct or not provided.");
    }

    const reqFile = req.file;
    let file = {};
    file.userID = req.checkData.id;
    file.name = req.body.fileName
      ? req.body.fileName
      : path.parse(reqFile.originalname).name;
    file.type = reqFile.mimetype;
    if (req.body.fileDesc) {
      file.desc = req.body.fileDesc;
    }
    file.category = req.body.fileCategory;

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
        let displayData = {};
        displayData.fileID = file._id;
        displayData.name = file.name;
        if (req.body.fileDesc) displayData.desc = req.body.fileDesc;
        displayData.category = file.category;
        displayData.type = reqFile.mimetype;
        displayData.data = reqFile.buffer.slice(0, 50);
        displayData.userID = req.checkData.id;
        displayData.createdAt = file.createdAt;

        return res.status(201).json(displayData);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json("Failure.");
      });
  }
);

fileRouter.get("/getUserFiles", checkUser, async (req, res) => {
  const userID = req.checkData.id;
  if (
    !req.query?.category ||
    !(req.query.category == "all" || types.includes(req.query.category))
  )
    return res
      .status(400)
      .json(
        `No field, 'category' provided or invalid; must be either in ${new String(
          types
        ).replace(",", ", ")} or be 'all'`
      );
  const category = req.query.category;
  let files;
  if (category == "all") {
    files = await User.findOne({ _id: userID })
      .select("files")
      .populate("files", "name desc type category");
    return res.json(files.files);
  } else {
    files = await User.findOne({ _id: userID })
      .select("files")
      .populate("files", "name desc type category", { category: category });
    return res.json(files.files);
  }
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
    "Content-Disposition":
      "attachment;filename=" + file.name + "." + mime.extension(file.type),
  });
  res.end(file.binData);
});

fileRouter.delete("/deleteFile", checkUser, async (req, res) => {
  if (!req.body.fileID)
    return res.status(400).json("No file to delete specified.");
  const fileID = req.body.fileID;
  let file;
  try {
    file = await File.findOne({ _id: fileID });
    if (!file) return res.status(404).json("No file with this ID found.");
  } catch (err) {
    return res.status(400).json("Error in request: " + err);
  }
  if (req.checkData.id != file.userID)
    return res.status(403).json("File owner does not match requester ID.");

  file.remove().catch((o) => console.log(o));
  return res.status(200).json(`File [${file._id}] removed.`);
});

fileRouter.post(
  "/tesseractUpload",
  [checkUser, upload.single("file")],
  async (req, res) => {
    // (x) - POST Layout
    // File itself as part of form

    try {
      if (!req.file || req.file == null || req.file == "") {
        return res.status(400).json("No file uploaded.");
      }
    } catch {
      return res.status(400).json("Invalid.");
    }

    if (req.file.size >= limitInMb * 1024 * 1024)
      return res.status(400).json("File size over 5MiB");
    if (
      !["bmp", "png", "jpeg", "tiff"].includes(req.file.mimetype.split("/")[1])
    )
      return res
        .status(400)
        .json(
          "Invalid filetype. Type should be either bmp, png, jpeg, or tiff."
        );

    let json = await TesseractDetect(req.file.buffer);
  }
);

export default fileRouter;
