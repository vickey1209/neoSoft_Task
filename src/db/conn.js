const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_URI,{

})
.then(()=>{
    console.log("DB CONNECTED");
    
})
.catch((error)=>{
    console.log('mongodb conn error ', error)
})

