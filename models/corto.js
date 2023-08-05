import mongoose from "mongoose";
const cortoSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    { collection: "cortos" }
);
