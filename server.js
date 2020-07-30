const express = require('express')
const mongoose  = require('mongoose')
const bodyParser  = require("body-parser")

const items = require('./routes/api/items')

const dotenv = require('dotenv')
const app = express()
//bodyParser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const connectDB = require('./config/db')

//Db Config
dotenv.config({path:'./config/config.env'})
connectDB()

// use routes

app.use('/api/items',items)

const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server start at port ${port}`))