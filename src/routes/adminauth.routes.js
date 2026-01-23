
const express = require('express')
const adminController = require('../controller/admin.controller')
const router = express.Router()
router.post('/signup',adminController.register)

module.exports = router