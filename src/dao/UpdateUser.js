const res = require('express/lib/response')
const User = require('../models/UserModel')

async function update(req, res) {
    await User.findOneAndUpdate
    (
        {_id:req.body.user_id, password: req.body.password}, 
        {$set: {user_name:req.body.user_name}}, 
        {new:true}
    )
    .then(function (user) 
    {
        if(user === null)
            res.send('<h1>Wrong Credentials</h1>')
        else
            res.send(user)
    })
    .catch(function (err) {})
}

module.exports = update