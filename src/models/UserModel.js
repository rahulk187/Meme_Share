const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id : {
        type : Number,
        required : true
    },
    user_name : {
        type : String,
        required : true
    },
    user_email : {
        type : String,
        required : true
    },
    password : String,
    mobile : Number,
    dob : Date,
    gender : String,
    // dp : {
    //     data: Buffer,
    //     contentType: String
    // },
    bio : String,
    skills : String,
    interests : String,
    friends : [{friend_user_id: Number}],
    user_profile : String,
    status : Number
})

const User = new mongoose.model('User', userSchema)

module.exports = User