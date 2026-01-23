const userModel = require('../models/user.model')
const bycrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken')
async function register(req,res){
    const {name,email,password} = req.body
    const isuserexit = await userModel.findOne({email})
    if(isuserexit){
        res.status(400).json({message:"User Already Exists"})
    }
    const hashpassword = await bycrypt.hash(password,10)
    const user = await userModel.create({
        name,
        email,
        password:hashpassword
    })
    const token = jwt.sign({id:user._id},process.env.JWTSECRET)
    res.cookie("token",token)
    res.status(201).json({
        message:"User registered successfully",
        user:{
            email:user.email,
            _id:user._id,
            name:user.name
        }
    })
}

module.exports = {register}