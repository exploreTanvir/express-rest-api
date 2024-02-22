const express=require("express")
const { helloGet, helloPost } = require("../controllers/user.controller")
const router=express.Router()



router.get("/helloGet",helloGet)
router.get("/helloPost",helloPost)


module.exports={router}