import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import createEvent from "./routes/createEvent.js"
import home from "./routes/home.js"

const app = express()
dotenv.config()

const connect = () =>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to db");
    })
    .catch((err)=>{
        throw err;
    });
};

mongoose.set('strictQuery', false);

app.use(express.json());
app.use("/api/",home);
app.use("/api/events",createEvent);

// app.use((err, req,res,next)=>{
//     const status = err.status || 500;
//     const message = err.message || "something went wrong";

//     return res.status(status).json({
//         success:false,
//         status,
//         message,
//     }) 
// });

app.listen(8800, ()=>{
    connect()
    console.log(" Server Connected!")
}) 