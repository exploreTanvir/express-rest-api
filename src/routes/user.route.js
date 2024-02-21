const express=require("express")
const { example } = require("../controllers/user.controller")
const router=express.Router()



router.get("/test",example)


module.exports={router}