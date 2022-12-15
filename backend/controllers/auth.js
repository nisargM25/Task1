import { db } from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
    //Check exisiting user

    const q = "Select * from user where name=? or email=?"
    db.query(q, [req.body.name,req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) {
            return res.status(409).json("User Already Exist");
        }
        else {
            //Hash the Password and create a user
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
    
            const q = "Insert into user (`name`,`email`,`mobile`,`password`) values(?)"
            const values = [
                req.body.name,
                req.body.email,
                req.body.mobile,
                hash,
            ]
            db.query(q, [values], (err, data) => {
                if (err) return res.json(err);
                if (data) return res.status(200).json("User Created");
            })
        }
    })

}

export const login = (req, res) => {
    let flag = 0;
    //Check user
    const q = "select * from user where name =? ";
    db.query(q, [req.body.name], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) {
            const p = "select * from user where email =? ";
            db.query(p, [req.body.name], (err, data) => {
                if (err) return res.json(err)
                if (data.length === 0) {
                    return res.status(404).json("User not found");
                }
                // check password
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)
                if (!isPasswordCorrect) return res.status(400).json("Wrong Email or Password")
                const token = jwt.sign({ id: data[0].id }, "jwtkeyClient",{expiresIn:"2h"});
                // console.log(token)
                const { password, ...other } = data[0]
                flag = 1;
                res.cookie("access_token", token, { httpOnly: true}).status(200).json(other)
            })
        }
        else {
            // check password
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)
            if (!isPasswordCorrect) return res.status(400).json("Wrong Email or Password")
            const token = jwt.sign({ id: data[0].id }, "jwtkeyClient");
            // console.log(token)
            const { pass, ...other } = data[0]
            flag = 1;
            res.cookie("access_token", token, { httpOnly: true}).status(200).json(other)
        }
    })
}

export const logout = (req, res) => {
    res.clearCookie('access_token',{ httpOnly: true}).status(200).json("Logged Out"); 
    // res.clearCookie("access_token",{ httpOnly: true, sameSite:"none",secure:true }).status(200).json("Logged Out")

}