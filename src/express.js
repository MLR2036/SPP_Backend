import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from "body-parser";
const app = express()
import {sendEmail} from './email.js'
import  cors from 'cors'



const PORT = process.env.PORT



app.use(bodyParser.json())
app.use(cors())
app.post("/email", async (req, res)=> {
    try {
        await sendEmail(req.body);
        res.status(200).send("email sent")
    } catch (e) {
        res.status(500).send("email sent its still working dw about it")
    }
})

app.listen(PORT)
console.log(`running server on ${PORT}`)