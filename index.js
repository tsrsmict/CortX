import express from "express"
import * as http from "http"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"

import * as jwt from jsonwebtoken

const app = express()
dotenv.config()


mongoose.connect(process.env.HEALTHCARE_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use(express.json())
app.use(bodyParser.json())
const server = http.Server(app)

app.use(express.static("public"))
app.use('/sounds', express.static("sounds"))

app.get("/", (req, res) => {
    res.json("yo")
})

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    if (! req.body.username || !req.body.email || !req.body.password || !req.body.confirmation) {
        return res.json({ status: 'error', error: 'Missing fields.'})
    }

    var { username, email, password, confirmation } = req.body
    email = email.toLowerCase()

    if (typeof(username) !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username.'})
    }

    if (!validator.validate(email)) {
        return res.json({ status: 'error', error: 'Invalid E-mail'})
    }

    if (!(password.length >= 7)) {
        return res.json({ status: 'error', error: 'Password is too small. Should be atleast 7 characters.'})
    }

    if (password != confirmation) {
        return res.json({ status: 'error', error: "Passwords don't match."})
    }
    var response;
    try {
        response = await User.create({
            username,
            email,
            password
        })
        console.log("User created successfully " + response)
    } catch (error) {
        if (error.code === 11000) {
            // duplicate username or e-mail
            return res.json({ status: 'error', error: 'Username/E-mail already in use.'})
        }
        throw error
    }

    const token = jwt.sign({ id: response._id, username: response.username }, process.env.JWT_SECRET)

    res.cookie('token', token, { maxAge: 1000*60*60*24*cookieAge })
    res.json({status: 200})

})

const listener = server.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on ${listener.address().port}`)
})