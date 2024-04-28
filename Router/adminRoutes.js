const express = require("express");
const router = express.Router();

const admin = require('../Admin/addNewPlaces')

router.get('/getPlaces' , admin.getPlaces)
router.post('/addPlaces' , admin.addPlaces)

module.exports = router;