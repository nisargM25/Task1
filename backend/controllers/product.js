import { db } from '../db.js';


export const getAllCars = (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    const q = "Select * from vehicle order by id desc LIMIT ? OFFSET ? ";
    db.query(q, [limit, offset], (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}

export const getAllCarsByUser = (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    const id = req.user.id;
    const q = "Select * from vehicle where seller_id=? order by id desc LIMIT ? OFFSET ? ";
    db.query(q, [id, limit, offset], (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}

export const getAllCarsNotByUser = (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    const id = req.user.id;
    const q = "Select * from vehicle where seller_id!=? order by id desc LIMIT ? OFFSET ? ";
    db.query(q, [id, limit, offset], (err, data) => {
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

export const getOfferForPerticularCar = (req, res) => {
    const id = req.params.id;
    const sid=req.user.id;
    const q = "Select * from offers where vehicleID=? and sellerid=?";
    db.query(q, [id,sid], (err, data) => {
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

export const makeOffer = (req, res) => {
    const buyerId = req.user.id;
    // console.log(req.body)
    const vehicleId = parseInt(req.body.vehicleId);
    const sellerID = parseInt(req.body.sellerId);
    const bid = parseInt(req.body.bid);

    const p = "Select * from user where id=?";
    db.query(p, [buyerId], (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).json(err)
        }
        if (data) {
            const userDetails = data[0];

            const userName = userDetails.name;
            const userEmail = userDetails.email;
            const userContact = userDetails.mobile;
            const values = [
                vehicleId,
                sellerID,
                buyerId,
                userName,
                userEmail,
                userContact,
                bid
            ];
            console.log(values)
            const q = "INSERT INTO `offers` (`vehicleID`, `sellerID`, `userID`, `userName`, `userEmail`, `userContact`, `offerByUser`) VALUES (?)";
            db.query(q, [values], (err, data) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json(err)
                    return res.status(500).json(err)
                }
                return res.status(200).json("Bid Placed")
            })
            // return res.status(200).json("Bid Placed")
        }
    })
}