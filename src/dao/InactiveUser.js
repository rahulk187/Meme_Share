const User = require('../models/UserModel')

async function inactive(req, res) {
    await User.findOneAndUpdate({_id:req.query.id, password: req.query.password}, {$set: {status:2}}, {new:true}).then(function (user) {
        if(user === null)
            res.send('<h1>Wrong Credentials</h1>')
        else
            res.send(user)
    }).catch(function (err) {})
}

module.exports = inactive