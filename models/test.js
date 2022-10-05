import mongoose from 'mongoose'

const TestSchema = new mongoose.Schema(
{
    userID: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    type: { type: String, required: true },
    data: { type: String, required: true },
}, { collection: 'tests' , timestamps: true})


const Test = mongoose.model('Test', TestSchema)

export default Test