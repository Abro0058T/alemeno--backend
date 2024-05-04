const express=require("express")
const cors=require("cors")
const routes = require("./routes/index.js");


const app=express()


app.use(express.json())

app.use(express.urlencoded({ extended: true }));



app.use(
    cors({
        origin:[
            "http://localhost:5173"
        ],
        credentials:true,
    })
)

app.options("*",cors())



app.use("/v1", routes);



module.exports=app;