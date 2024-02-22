require("dotenv").config()
const express=require("express")
const { router } = require("./src/routes/user.route")
const app=express()
const PORT=process.env.PORT
app.use("/api/user",router)

app.get((req,res)=>{
    res.send("404 not found")
})

app.listen(PORT,()=>{
    console.log(`server is running on the port number ${PORT}`)
})