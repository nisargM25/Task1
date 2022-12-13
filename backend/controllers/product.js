import { db } from '../db.js';

export const getAllCars=(req,res)=>{
    const q = "Select * from vehicle";
    db.query(q, (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}


export const sellCar=(req,res)=>{
    // const q="INSERT INTO `vehicle` (`make`, `model`, `dateOfManufacturing`, `miles`, `images`, `sellingPriceRange`, `seller_id`) VALUES (?)";
    // const values;
    // db.query(q, [values], (err, data) => {
    //     if (err) return res.status(500).json(err)
    //     return res.json("Car Added")
    // })
    res.json("caradded")
}