import express from "express"
import * as http from "http"
import dotenv from "dotenv"

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

const server = http.Server(app)

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use('/sounds', express.static("sounds"))



const listener = server.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on ${listener.address().port}`)
})