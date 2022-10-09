import mongoose from "mongoose";
import dayjs from "dayjs";
const FileSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    desc: String,
    category: { type: String, required: true },
    type: { type: String, required: true },
    binData: { type: Buffer, required: true },
  },
  { collection: "files", timestamps: true }
);

const File = mongoose.model("File", FileSchema);

export default File;
