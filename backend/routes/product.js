import express from 'express';
import { getAllCars, sellCar } from '../controllers/product.js';

const router=express.Router();

router.get("/",getAllCars);
router.post("/sellcar",sellCar);

export default router