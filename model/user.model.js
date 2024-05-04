const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
   name:{type:String},
   collage:{
    type:String
   },
   enrolledOn:{
    type:Date
   },
   courses:[{
       course:{type:mongoose.SchemaTypes.ObjectId,
       ref:"Courses",},
       enrolledOn:{
        type:Date,
        default:new Date()
       },
       progress:{
        type:Number,
        default:0.0
       }
    }
]
  },
  {
    statics:{
      // to check if course is already taken
      isCourseTaken:async function(courseId,userId){
        const courses=await this.findById(userId)
        for(const course of courses.courses){
          if(course.course==courseId){
            return true
          }
        }
        return false;
      }
    },
    timestamps: true,
  }
);




const User = mongoose.model("User", userSchema);

module.exports = User;
