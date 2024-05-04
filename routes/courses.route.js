const express = require("express");
const router = express.Router();
const coursesController=require("../controller/courses.controller.js") 

router.get("/",coursesController.getAllCourses)
router.get("/course/:courseId",coursesController.getCourseDetails)

module.exports=router;
