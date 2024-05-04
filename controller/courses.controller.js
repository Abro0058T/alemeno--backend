const Courses = require("../model/courses.model")

const getAllCourses=async(req,res)=>{
    try{
        const queryTerms = req.query?.query?.split(" ")||[" "];
const filter = {
  $or: [
    { name: { $regex: new RegExp(queryTerms.join("|"), "i") } },
    { instructor: { $regex: new RegExp(queryTerms.join("|"), "i") } },
  ],
};

        const courses=await Courses.find(filter)
        res.status(200).json(courses)
    }catch(error){
        throw new Error("erro getting courses ")
    }
}

const getCourseDetails=async(req,res)=>{
    try{
        const {courseId}=req.params
        const course=await Courses.findById(courseId)
        res.status(200).json(course)
    }catch(error){
        throw new Error("erro getting courses ")   
    }
}

module.exports={
    getAllCourses,
    getCourseDetails
}