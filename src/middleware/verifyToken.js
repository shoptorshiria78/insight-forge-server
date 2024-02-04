const jwt = require("jsonwebtoken");
const UserData = require('../models/User');


module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).send({ message: 'forbidden access' })
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
        if (error) {
            return res.status(401).send({ message: 'forbidden access' })
        }
        req.decode = decode
        console.log("verifypage", decode)
        next()
        // const user = payload
        // UserData.findById(user).then(userData=>{
        //     req.user = userData
        //     console.log("first", user, req.user)
        // })

    })
}