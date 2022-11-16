const express = require("express")
const res = require("express/lib/response")
const router = express()
const temp = require("http")
const http = temp.createServer(router)

http.listen(3000 , function(){
    console.log("Server Started!!")
})

router.use(express.static(__dirname + "/public"))

router.get("/rudra" , function(req , res){
    res.sendFile(__dirname + "/index.html")
});