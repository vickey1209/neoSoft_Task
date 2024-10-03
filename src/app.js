const express = require("express")
const app = express()
const connectDB = require("./db/conn")
const userRoute = require("./router/userRoute")

require('dotenv').config()

const port = process.env.PORT || 3600
app.use(express.json());


app.use('/api/users ' , userRoute)


app.get("/", (req,res)=>{
    console.log("working fine ")
})




app.listen(port,()=>{
    console.log(`app isrunning at port ${port} `)
})