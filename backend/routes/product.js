import express from 'express';
import { getAllCars, sellCar } from '../controllers/product.js';

const router=express.Router();

router.get("/:id",getAllCars);
router.post("/",sellCar);

export default router

