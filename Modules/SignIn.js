const mongoose = require('mongoose');

const signup = new  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : true
    },
    activitiesList: [{
        type: String,
        required: true
    }]
})

const User = mongoose.model('User' , signup) ;
module.exports = User