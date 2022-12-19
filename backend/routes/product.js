import express from 'express';
import { deleteCar, getAllCars, getAllCarsByUser, getSingleCar, sellCar,updateCar } from '../controllers/product.js';

const router=express.Router();

router.get("/",getAllCars);
router.get("/user/:id",getAllCarsByUser);
router.get("/:id",getSingleCar);
router.post("/sellcar",sellCar);
router.put("/update/:id",updateCar);
router.delete("/:id",deleteCar);

export default router