import  express  from "express";
import { createError } from "../utils/error.js";
import {  getHotel, getHotels, createHotel, deleteHotel,  updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();


//////create hotel
router.post("/",verifyAdmin,createHotel)

//update hotel

router.put("/:id",verifyAdmin,updateHotel)

////delete the hotel

router.delete("/:id",verifyAdmin,deleteHotel)

    ///////get a single hotel
    router.get("/:id",getHotel)

////////get all hotel

router.get("/",getHotels)




export default router