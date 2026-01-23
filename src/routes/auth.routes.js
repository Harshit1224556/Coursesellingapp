const express = require('express')
const authcontroller = require('../controller/auth.controller')
const router = express.Router()

router.post("/register",authcontroller.register)
router.get("/login",authcontroller.login)
module.exports = router
