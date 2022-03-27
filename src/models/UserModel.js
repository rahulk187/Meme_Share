const mongoose = require('mongoose')
const db = require('./connection')

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
    dp : String,
    bio : String,
    skills : String,
    interests : String,
    user_profile : String,
    status : Number
})

const User = new mongoose.model('User', userSchema)

module.exports = User