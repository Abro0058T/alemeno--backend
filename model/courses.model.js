const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema(
  {
        name: {
          type: "string",
          required: true // Make name mandatory
        },
        instructor: {
          type: "string"
        },
        description: {
          type: "string"
        },
        enrollmentStatus: {
          type: "string",
          enum: ["Open", "Closed", "In Progress"] // Allowed values
        },
        thumbnail: {
          type: "string"
        },
        duration: {
          type: "string"
        },
        schedule: {
          type: "string"
        },
        location: {
          type: "string"
        },
        prerequisites: {
          type: "array",
          items: "string" // Array of strings
        },
        syllabus: {
          type: "array",
          items: {
            type: "object",
            properties: {
              week: {
                type: "number"
              },
              topic: {
                type: "string"
              },
              content: {
                type: "string"
              }
            }
          }
        },
        students: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "number" // Assuming student ID is a number
              },
              name: {
                type: "string"
              },
              email: {
                type: "string"
              }
            }
          }
        }
      },{timestamps:true}
);

// add plugin that converts mongoose to json


/**
 * @typedef Token
 */
const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;
