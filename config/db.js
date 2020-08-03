const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`)
    }catch(err){
        console.log(`Error:${err.message}`)
        process.exit(1)
        /*exit() you actually emit the exit event that ends all tasks immediately even if there still are asynchronous
         operations not been done. process. exit() takes an exit code (Integer) as a parameter. The code 0 is the default 
         and this means it exit with a 'success'. While the code 1 means it exit with a 'failure' */
    }

}

module.exports =connectDB