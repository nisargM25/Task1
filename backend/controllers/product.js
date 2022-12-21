import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const getAllCars = (req, res) => {
    const q = "Select * from vehicle order by id desc";
    db.query(q, (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}

export const getAllCarsByUser = (req, res) => {
    const id = req.params.id;
    const q = "Select * from vehicle where seller_id=? order by id desc";
    db.query(q, [id], (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}

export const deleteCar = (req, res) => {
    const id = req.params.id;
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

export const updateCar = (req, res) => {
    const id = req.params.id;
    console.log("Update")
    const q = "Update vehicle set make=?,model=?,registrationNumber=?,dateOfManufacturing=?,miles=?,images=?,sellingPriceRange=? where id=?";
    const values = [
        req.body.make,
        req.body.model,
        req.body.regNo,
        req.body.date,
        req.body.miles,
        req.body.images,
        req.body.price
    ]
    db.query(q, [...values, id], (err, data) => {
        if (err) {
            console.log(err)
            return res.send(err)
        }
        console.log("Updated")
        return res.status(200).json(data);
    })
}

//Adding Car to Table
export const sellCar = (req, res) => {
    
        const p = "Select * from vehicle where registrationNumber=?";
        db.query(p, [req.body.regNo], (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json(err)
            }
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
                if (err) {
                    console.log(err)
                    return res.status(500).json(err)
                }
                return res.status(200).json("Car Added")
            })

        })
    
}