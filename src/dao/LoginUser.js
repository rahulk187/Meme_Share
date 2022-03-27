const User = require('../models/UserModel')

async function login(req, res) {
    await User.findOne({_id : req.body.id, password : req.body.password}, (err, user) => {
        if(user == undefined) 
            res.send('<h1>Wrong Credentials</h1>')
        else
            res.send(user);
    })
    .catch(err =>{})
}

module.exports = login