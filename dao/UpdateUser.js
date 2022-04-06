const res = require('express/lib/response')
const User = require('../models/UserModel')

const bcrypt = require('bcrypt');

async function update(req, res) {
    await User.findOne({_id : req.body.user_id}, (err, user) => {
        if(user == undefined) { 
            res.send('<h1>Wrong Credentials</h1>')
        }
        else {
            const check = bcrypt.compareSync(req.body.password, user.password);

            if(check === true) 
            {
                User.findOneAndUpdate
                (
                    {_id:req.body.user_id}, 
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
            else
                res.send('<h1>Wrong Credentials</h1>')
        }
        })
        .catch(err =>{})
}

module.exports = update