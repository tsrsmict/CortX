import mongoose from "mongoose";

const FileSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    extension: { type: String, required: true },
    fileName: { type: String, required: true },
    fileDesc: String,
    binData: { type: Buffer, required: true },
  },
  { collection: "files", timestamps: true }
);

const File = mongoose.model("File", FileSchema);

export default File;
