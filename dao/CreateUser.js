const User = require('../models/UserModel')
const fs = require('fs')

const bcrypt = require('bcrypt');
const saltRounds = 10;


async function persistUserWithDp(req,res){

    const hash = bcrypt.hashSync(req.body.password, saltRounds);

    var img = fs.readFileSync(req.file.path)
    var encode_image = img.toString('base64')

    const user = new User({
        _id : req.body.user_id,
        user_name : req.body.user_name,
        user_email : req.body.user_email,
        password : hash,
        mobile : req.body.mobile,
        dob : req.body.dob,
        gender : req.body.gender,
        // dp : {
        //     data: new Buffer(encode_image, 'base64'),
        //     contentType: req.file.mimetype
        // },
        bio : req.body.bio,
        skills : req.body.skills,
        interests : req.body.interests,
        user_profile : req.body.user_profile,
        status : 1
    }) 
    await user.save().then(function(result){
        res.send(result)
    }).catch(function(err){
        res.send('<h1>User was already exists !</h1>')
    })
}

async function persistUserWithoutDp(req,res){

    const hash = bcrypt.hashSync(req.body.password, saltRounds);

    // var img = fs.readFileSync(req.file.path)
    // var encode_image = img.toString('base64')

    const user = new User({
        _id : req.body.user_id,
        user_name : req.body.user_name,
        user_email : req.body.user_email,
        password : hash,
        mobile : req.body.mobile,
        dob : req.body.dob,
        gender : req.body.gender,
        // dp : {
        //     data: new Buffer(encode_image, 'base64'),
        //     contentType: req.file.mimetype
        // },
        bio : req.body.bio,
        skills : req.body.skills,
        interests : req.body.interests,
        user_profile : req.body.user_profile,
        status : 1
    }) 
    await user.save().then(function(result){
        res.send(result)
    }).catch(function(err){
        res.send('<h1>User was already exists !</h1>')
    })
}

module.exports = {persistUserWithDp, persistUserWithoutDp}