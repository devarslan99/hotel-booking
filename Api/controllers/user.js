import User from "../models/User.js";






export const updateUser=async(req,res,next) =>{

    try {
    
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    
        res.status(200).send(updatedUser);
        
    } catch (err) {
        
        next(err)
    }
}



export const deleteUser=async(req,res,next) =>{

   
    try {
        
await User.findByIdAndUpdate(req.params.id)
    
        res.status(200).json("hotel has been deleted");
        
    } catch (err) {
        
        next(err)
    }

}







export const getUser=async(req,res,next) =>{

    try {
            
        const User=await User.findById(req.params.id)
    
        res.status(200).send(User);
        
    } catch (err) {
        
        next(err)
    }

}





export const getUsers=async(req,res,next) =>{

    try {
            
        const users=await User.find({})
    
        res.status(200).send(User);
        
    } catch (err) {
        
        next(err)
    }

}