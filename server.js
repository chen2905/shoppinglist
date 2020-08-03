const express = require('express')
/*Express is a minimal and flexible Node.js web application framework that provides a robust set of features 
to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. */
const mongoose  = require('mongoose')
/*
Mongoose is an object data modeling (ODM) library that provides a rigorous modeling environment for your data,
 enforcing structure as needed while still maintaining the flexibility that makes MongoDB powerful. 
*/
const bodyParser  = require("body-parser")
/*
body-parser extract the entire body portion of an incoming request stream and exposes it on req. body .
The middleware was a part of Express. js earlier but now you have to install it separately. 
This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request
*/ 
const path =require('path')

const items = require('./routes/api/items')
 
const dotenv = require('dotenv')
/*
dotenv. Dotenv is a zero-dependency module that loads environment variables from a . env file into process. 
env . Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology
*/
const app = express()
//bodyParser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) //To load the middleware function, call app.use(), specifying the middleware function.
const connectDB = require('./config/db')

//Db Config
dotenv.config({path:'./config/config.env'})
connectDB()//it is an async function exported by db.js, now it is being called and ran

// use routes

app.use('/api/items',items)//items is routes that handles '/api/items' request
//serve static assets if in production
if(process.env.NODE_ENV ==='production'){
    //set static folder
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(_dirname,'client','build','index.html'))
    })
}
const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server start at port ${port}`))