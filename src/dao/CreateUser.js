const User = require('../models/UserModel')


async function persistUser(req,res){
    const user = new User({
        _id : req.body.user_id,
        user_name : req.body.user_name,
        user_email : req.body.user_email,
        password : req.body.password,
        mobile : req.body.mobile,
        dob : req.body.dob,
        gender : req.body.gender,
        dp : '',
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

module.exports = persistUser