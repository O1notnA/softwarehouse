const jwt = require ("jsonwebtoken");

const secret = "SECRET";

const generateToken = (userName) =>{
    const payload = {userName};
    const token = jwt.sign(payload, secret, {expiresIn: "1h"});
    return token;
}

const readToken = (token) =>{
    return new Promise((resolve, reject)  =>{
        jwt.verify(token, secret, (err, decoded) =>{
            if (err) reject(err);
            else if (decoded) resolve (decoded);
        })
    })
}

module.exports = {readToken, generateToken}