import EventSchema from "../schema.js"

export const addDetails= async(req,res,next)=>{
    const newEvent= new EventSchema({userId: req.user.id, ...req.body});
    try{
        const savedEvent = await newEvent.save();
        res.status(200).json(savedEvent)
    }catch(err){
        next(err)
    }

}
