import mongoose from 'mongoose'

const TestSchema = new mongoose.Schema(
{
    type: { type: String, required: true },
    data: { type: String, required: true },
}, { collection: 'tests' , timestamps: true})


const Test = mongoose.model('Test', TestSchema)

export default Test