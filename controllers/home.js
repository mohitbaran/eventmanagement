export const getEvent = async(req,res,next)=>{
    try{
        const event = await Event.findbyId(req.params.id)
        res.status(200).json(event)
    }catch(err){
        next(err)
    }
}
