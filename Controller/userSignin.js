const User = require('../Modules/SignIn')
require('dotenv').config();
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');



const signup = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const category ='';
    const password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    const activitiesList = [];
    

    const newUser = new User({ name, email  , category, password , activitiesList });
    
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY , { expiresIn: '1h' });

    // await newUser.save();
    console.log('user' , newUser);
  
    res.status(201).json({ message: 'Signup successful', token : token ,  data: { name, email , category, password , activitiesList } });
};

const login = async (req , res) => {
   
    try {
        console.log('emain' , req.body.email)

        const user = await User.findOne({email : req.body.email})
        

        console.log('user' , user);
        if(user) {
            const bytes = CryptoJS.AES.decrypt(user.password , process.env.SECRET_KEY); 
            const password = bytes.toString(CryptoJS.enc.Utf8); 
    
            const password1 = password
            const password2 = req.body.password
            // console.log('password1 : ' , password1)
            // console.log('password2 : ' , password2)
            if(password1 !== password2) {
                res.status(500).json("passward not match")
            }else {

                res.status(200).json(user);
            }

        }else {
            res.status(400).json("user not found")
        }
    }catch (err) {
          console.log('err : ' , err);
    }
}

module.exports = {
    signup,
    login
};
