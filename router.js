// const router = 
const express = require("express");
const router = express.Router();
const service = require("./service.js")
router.get("/users",service.list)

router.get("/",(req,res)=>{
	res.send("你好 post")
})

router.get("/dics",service.dicList)


router.get("/user/:id",(req,res)=>{
  let id = req.params.id;
  res.send("/user/:id => "+id)
})


router.post("/user",(req,res)=>{
  let user = req.body;
  res.send("/user => "+user.name)
})

module.exports = router;




