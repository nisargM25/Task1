import express from 'express';
import { deleteCar, getAllCars, getSingleCar, sellCar } from '../controllers/product.js';

const router=express.Router();

router.get("/",getAllCars);
router.get("/:id",getSingleCar);
router.post("/sellcar",sellCar);
router.delete("/:id",deleteCar);

export default router