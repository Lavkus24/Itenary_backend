const newPlaces = require('../Modules/newPlaces')
const fetch = require('node-fetch');

const addPlaces = (req , res) => {
    const data  = req.body;
    console.log('data : ' , data);
    const name = req.body.name;
    const imageUrl = req.body.url;
    const capacity = req.body.capacity;
    const price = req.body.price;

    const newPlace = new newPlaces({name, imageUrl , capacity , price})

    console.log('new Places :  ' , newPlace)

    newPlace.save();
    
    res.status(201).json({message : "added successfully"})
}
const getPlaces = async (req , res) => {
    
    try {
        const data  = await newPlaces.find();
        
        console.log('data' , data);
        res.status(200).json({data : data})
    }catch (error) {
        console.error('error' , error);
    }
    
}

module.exports = {
    addPlaces,
    getPlaces
}