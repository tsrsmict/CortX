import express from "express"
import * as http from "http"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
dotenv.config()

/*
mongoose.connect(process.env.HEALTHCARE_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
*/

app.use(express.json())
app.use(bodyParser.json())
const server = http.Server(app)

app.use(express.static("public"))
app.use('/sounds', express.static("sounds"))

app.get("/", (req, res) => {
    res.json("yo")
})

const listener = server.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on ${listener.address().port}`)
})