import  express  from "express";
import { createError } from "../utils/error.js";
import {  getHotel, getHotels, createHotel, deleteHotel,  updateHotel } from "../controllers/hotel.js";

const router=express.Router();


//////create hotel
router.post("/",createHotel)

//update hotel

router.put("/:id",updateHotel)

////delete the hotel

router.delete("/:id",deleteHotel)

    ///////get a single hotel
    router.get("/:id",getHotel)

////////get all hotel

router.get("/",getHotels)




export default router