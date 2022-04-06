const User = require('../models/UserModel')

const bcrypt = require('bcrypt');

async function inactive(req, res) {
    await User.findOne({_id : req.query.id}, (err, user) => {
        if(user == undefined) { 
            res.send('<h1>Wrong Credentials</h1>')
        }

        else {
            const check = bcrypt.compareSync(req.query.password, user.password);

            if(check === true) 
            {
                    User.findOneAndUpdate({_id:req.query.id}, {$set: {status:2}}, {new:true}).then(function (user) {
                        if(user === null)
                            res.send('<h1>Wrong Credentials</h1>')
                        else
                            res.send(user)
                    }).catch(function (err) {})
            }
            else
                res.send('<h1>Wrong Credentials</h1>')
        }

    })
    .catch(err =>{})
}

module.exports = inactive