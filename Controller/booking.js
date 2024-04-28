
const Booking = require('../Modules/bookNow')

const bookNow = async (req , res) => {
     
    try {
        
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const seatNumber = req.body.seatNumber;
        const date = req.body.date;
        const placeName = req.body.placeName;
        const activityName = req.body.activityName;
        const userList = req.body.userList;
        
        const newBooking = new Booking({firstName , lastName , email , seatNumber , date , placeName, activityName , userList});
        await newBooking.save()
        console.log(newBooking);
        
        res.status(201).json({
            massage : 'Booked sucessfully' ,
            bookData : {firstName , lastName , email , seatNumber , date , placeName , activityName , userList}
        })
        
    } catch (error) {
         console.log('error : ' , error);
    }

}

module.exports = {
    bookNow
}