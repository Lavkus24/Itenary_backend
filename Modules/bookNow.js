const mongoose = require('mongoose')

const bookNow = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    seatNumber : {
        type : Number,
        required : true,
        max : 100
    },
    date : {
        type : Date,
        required : true,
        // min: new Date('1900-01-01'), 
        // max: new Date() 
    },
    placeName: {
        type : String,
        required : true
    },
    activityName: {
        type : String,
        required : true
    },
    userList : [{
                userName : {
                   type : String,
                   required : true
                },
                seatNumber : {
                    type : Number,
                     required : true
                },
                activity : [{
                        activityName : {
                            type : String,
                            required : true
                        }
                    }]
                
            }],
})

const Booking = mongoose.model('Booking' , bookNow)

module.exports = Booking