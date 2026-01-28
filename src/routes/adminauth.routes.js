
const express = require('express')
const adminController = require('../controller/admin.controller')
const authAdmin = require('../middleware/admin.middleware')
const admincoursecontroller = require('../controller/admincourse.controller')
const router = express.Router()
router.post('/signup',adminController.register)
router.get('/login',adminController.login)
router.post('/createcourse',authAdmin,admincoursecontroller.createcourse)

router.post('/deletecourse/:id',authAdmin,admincoursecontroller.deletecourse)

router.post('/updatecourse/:id',authAdmin,admincoursecontroller.updatecourse)


module.exports = router