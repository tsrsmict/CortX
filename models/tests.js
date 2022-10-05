import mongoose from 'mongoose'

const TestSchema = new mongoose.Schema(
{
    username: { type: String, required: true },
    type: { type: String, required: true },
    data: { type: String, required: true },
}, { collection: 'tests' , timestamps: true})


const Test = mongoose.model('Test', TestSchema)

export default Test