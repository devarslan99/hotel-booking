import Hotel from "../models/Hotel.js";

export const createHotel=async(req,res,next) =>{

    const newHotel=new Hotel(req.body);
    try {
        
        const hotel=await newHotel.save();

        res.status(200).send(hotel);
    
    } catch (err) {
        
        next(err)
    }

}





export const updateHotel=async(req,res,next) =>{

    try {
    
        const updatehotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    
        res.status(200).send(updatehotel);
        
    } catch (err) {
        
        next(err)
    }
}



export const deleteHotel=async(req,res,next) =>{

   
    try {
        
        const deletehotel=await Hotel.findByIdAndDelete(req.params.id)
    
        res.status(200).json("hotel has been deleted");
        
    } catch (err) {
        
        next(err)
    }

}







export const getHotel=async(req,res,next) =>{

    try {
            
        const hotel=await Hotel.findById(req.params.id)
    
        res.status(200).send(hotel);
        
    } catch (err) {
        
        next(err)
    }

}





export const getHotels=async(req,res,next) =>{

    try {
            
        const hotels=await Hotel.find({})
    
        res.status(200).send(hotels);
        
    } catch (err) {
        
        next(err)
    }

}