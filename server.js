const express = require('express')
const mongoose  = require('mongoose')
const bodyParser  = require("body-parser")
const dotenv = require('dotenv')
const app = express()
const connectDB = require('./config/db')
//bodyParser middleware
app.use(bodyParser.json())
//Db Config
dotenv.config({path:'./config/config.env'})
connectDB()



const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server start at port ${port}`))