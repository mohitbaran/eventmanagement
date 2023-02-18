import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    eventDate:{
        type:Date
    },
    contactNumber:{
        type:Number,
        required:true
    },
    // location, seatingcapacity
    location:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        required:true
    }, 
    seatingCapacity:{
        type:Number,
        required:true
    }
},{timestamps:true})

export default mongoose.model("Event", EventSchema);