const express = require("express");
const router = express.Router();
const userController=require("../controller/user.controller.js") 

router.get("/:userId",userController.getUserData)
router.post("/enroll",userController.addCourse)
router.post("/markComplete",userController.markComplete)


module.exports=router;
