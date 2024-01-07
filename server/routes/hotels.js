import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  updateHotel,
  countByCity,
  countByType,
  getHotelRooms,
  getAllHotels,
  getCityHotels,
  getCity,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET Particular City hotels with min and MAx price
router.get("/getCityHotels", getCityHotels);

//
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/getcity", getCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
export default router;
