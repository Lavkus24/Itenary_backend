const mongoose = require('mongoose')

const places = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    capacity : {
        type : String,
        required : true,
        min : 0,
        max : 100
    },
    price : {
        type : Number,
        required : true,
        min : 1
    },
})

const Places = mongoose.model('Places' , places)

module.exports = Places