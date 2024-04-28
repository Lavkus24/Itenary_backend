const express = require("express");
const router = express.Router();
const user = require('../Controller/userSignin')
const booking = require('../Controller/booking')
const validation = require('../Validation/validate')

router.post('/signup'  ,  user.signup)
router.post('/login' ,  user.login)
router.post('/booking' ,  booking.bookNow)

module.exports = router;
