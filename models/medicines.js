import mongoose from "mongoose";
const MedicineSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        conflicts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Medicine",
            },
        ],
        partsAffected: [{ type: String }],
        sideEffects: [{ type: String }],
    },
    { collection: "medicines" }
);
const Medicine = mongoose.model("Medicine", MedicineSchema);
export default Medicine;
