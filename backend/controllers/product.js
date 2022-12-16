import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const getAllCars = (req, res) => {
    const q = "Select * from vehicle";
    db.query(q, (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}
export const deleteCar = (req, res) => {
    const id = req.params.id;
    console.log(id);
    const q = "delete from vehicle where id=?";
    db.query(q, [id], (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}


export const getSingleCar = (req, res) => {
    const id = req.params.id;
    const q = "Select * from vehicle where id=?";
    db.query(q, [id], (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}


export const sellCar = (req, res) => {
    const token = req.cookies.access_token;
    console.log(req.cookies.access_token)
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkeyClient", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const p = "Select * from vehicle where registrationNumber=?";
        db.query(p, [req.body.regNo], (err, data) => {
            if (err) return res.json(err);
            if (data.length) return res.status(409).json("Registration Plate/License Number already Exist");

            const q = "INSERT INTO `vehicle` (`make`, `model`,`registrationNumber` ,`dateOfManufacturing`, `miles`, `images`, `sellingPriceRange`, `seller_id`) VALUES (?)";
            const values = [
                req.body.make,
                req.body.model,
                req.body.regNo,
                req.body.date,
                req.body.miles,
                req.body.images,
                req.body.price,
                req.body.sid,
            ]
            // console.log(values)
            db.query(q, [values], (err, data) => {
                if (err) return res.status(500).json(err)
                return res.status(200).json("Car Added")
            })

        })
    })
}
