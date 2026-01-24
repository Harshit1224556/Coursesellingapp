const adminModel = require('../models/admin.model')
const jwt = require('jsonwebtoken')

async function authAdmin(req,res,next) {
    const {token}  = req.cookies;
    if(!token){
       return  res.status(401).json({
            message:"Unauthorized"
        })
    }

    try{
       const decoded = jwt.verify(token,process.env.JWTSECRET)
       const admin = await adminModel.findById(decoded.id)
       req.admin= admin
       next()
    }
    catch(err){
        return res.status(401).json({
            message:"unauthorized"
        })
    }
}

module.exports = authAdmin