const express = require('express')
const authcontroller = require('../controller/auth.controller')
const router = express.Router()
const usercourse = require('../controller/usercourse.controller')
const authuser = require('../middleware/auth.middleware')
router.post("/register",authcontroller.register)
router.get("/login",authcontroller.login)
router.get('/showcourse',authuser,usercourse.seecourse)

router.post('/purchasecourse/:courseId',authuser,usercourse.purchasecourse)

router.get('/seepurchasecourse',authuser,usercourse.seepurchasedcourse)
module.exports = router
