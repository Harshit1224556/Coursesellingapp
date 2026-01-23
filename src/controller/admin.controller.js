const adminModel = require('../models/admin.model')
const bycrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function register(req,res){
    const {name,email,password} = req.body
    const isadminexit = await adminModel.findOne({email})
    if(isadminexit){
        res.status(400).json({message:"Teacher Already Exists"})
    }
    const hashpassword = await bycrypt.hash(password,10)
    const admin = await adminModel.create({
        name,
        email,
        password:hashpassword
    })
    const token = jwt.sign({id:admin._id},process.env.JWTSECRET)
    res.cookie("token",token)
    res.status(201).json({
        message:"User registered successfully",
        admin:{
            email:admin.email,
            _id:admin._id,
            name:admin.name
        }
    })
}


async function login(req,res)
{
    const{email,password} = req.body
    const admin = await adminModel.findOne({email})
    if(!admin){
        return res.status(401).json({
            message:"Invalid Email Id"
        })
    }

    const ispassword = await bycrypt.compare(password,admin.password)
    if(!ispassword){
        return res.status(401).json({
            message:"Invalid password"
        })
    }

    return res.status(200).json({
        message:"Admin Login Successfull"
    })
}

module.exports = {register,login}