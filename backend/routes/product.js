import express from 'express';
import jwt from 'jsonwebtoken';
import { deleteCar, getAllCars, getAllCarsByUser, getAllCarsNotByUser, getSingleCar, sellCar, updateCar, makeOffer, getOfferForPerticularCar } from '../controllers/product.js';

const router = express.Router();

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        
        jwt.verify(token, "AuthJwt", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid")
            }
            req.user = user;
            next()
        })
    }
    else {
        res.status(401).json("Access Forbidden")
    }
}

router.get("/", getAllCars);
router.get("/detail/:id", getSingleCar);

router.get("/user/", verify, getAllCarsByUser);
router.get("/userS/", verify, getAllCarsNotByUser);
router.get("/:id", verify, getSingleCar);
router.get("/bid/:id",verify,getOfferForPerticularCar);

router.post("/sellcar", verify, sellCar);
router.post("/offer", verify, makeOffer);

router.put("/update/:id", verify, updateCar);
router.delete("/:id", verify, deleteCar);




export default router