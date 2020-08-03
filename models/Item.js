const mongoose =require('mongoose')
const Schema =mongoose.Schema
//I think at this moment mongoose object is already connect to mongodb, which is done in db.js

//Create Schema

const ItemSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('Item',ItemSchema)