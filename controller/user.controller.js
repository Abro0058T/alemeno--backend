const Courses = require("../model/courses.model")
const User = require("../model/user.model")

const getUserData=async(req,res)=>{
    const{userId}=req.params
    try{const user= await  User.findById(userId).populate({
        path:"courses",
        populate:{path:"course"}
    })
    res.status(200).send(user)
}catch(error){
    throw new Error(error)
}}

const addCourse=async(req,res)=>{
    const {courseId,userId}=req.query
    try{
        const course=await Courses.findById(courseId)
        if(await User.isCourseTaken(courseId,userId)){
            res.status(200).json({code:200,message:"Course Alreadt Taken"})
        }
        else{

            const addCourse=await User.findByIdAndUpdate(userId,{
                $push:{"courses":{
                    course:course._id,
                }}
            }
        )
        res.status(200).json({code:200,message:"Course Added successfully",data:addCourse})
    }
    }catch(error){
        throw new Error("Error in adding course please try again")
    }
}
const markComplete=async(req,res)=>{
    const {courseId,userId}=req.query
    try{
        const  markComplete=await User.findByIdAndUpdate(userId,{
              $set:{"courses.$[elem].progress":100},

        },{
            arrayFilters:[{"elem.course":courseId}],
            new:true
        }).populate({path:"courses",populate:"course"})
        res.status(200).json({message:"Marked as complete",data:markComplete})
    }catch(error){
        throw new Error("Error while marking as complete")
    }
}
module.exports={
    getUserData,
    addCourse,
    markComplete
}