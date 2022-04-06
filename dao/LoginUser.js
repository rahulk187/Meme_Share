const User = require('../models/UserModel')

const bcrypt = require('bcrypt');

async function login(req, res) {
    await User.findOne({_id : req.body.id}, (err, user) => {
        if(user == undefined) { 
            res.send('<h1>Wrong Credentials</h1>')
        }
        else {
            const check = bcrypt.compareSync(req.body.password, user.password);

            if(check === true) 
                res.send(user);
            else
                res.send('<h1>Wrong Credentials</h1>')
        }
        })
        .catch(err =>{})
}

module.exports = login