import express from 'express';
import jwt from 'jsonwebtoken';
import { deleteCar, getAllCars, getAllCarsByUser, getAllCarsNotByUser, getSingleCar, sellCar,updateCar } from '../controllers/product.js';

const router=express.Router();

const verify=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    console.log(authHeader)
    if(authHeader){
        const token=authHeader.split(" ")[1]
        // console.log(token)
        jwt.verify(token,"AuthJwt",(err,user)=>{
            if(err){
                return res.status(403).json("Token is not valid")
            }
            req.user=user;
            
            next()
        }) 
    }
    else{
        res.status(401).json("Access Forbidden")
    }
}

router.get("/",getAllCars);
router.get("/detail/:id",getSingleCar);

router.get("/user/:id",verify,getAllCarsByUser);
router.get("/userS/:id",verify,getAllCarsNotByUser);
router.get("/:id",verify,getSingleCar);
router.post("/sellcar",verify,sellCar);
router.put("/update/:id",verify,updateCar);
router.delete("/:id",verify,deleteCar);




export default router