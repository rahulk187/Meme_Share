const User = require('../models/UserModel')

async function addFriend(req, res) {
    await User.findOneAndUpdate
    (
        {_id: req.body.user_id}, 
        {$push: {friends: [{friend_user_id: req.body.friend_user_id}]}}, 
        {new:true}
    )
    .then(function (post) {res.send(post)})
    .catch(err => {console.error(err)})
}

async function removeFriend(req, res) {
    await User.findOneAndUpdate
    (
        {_id: req.body.user_id}, 
        {$pull: {friends: {friend_user_id: req.body.friend_user_id}}}, 
        {new:true}
    )
    .then(function (post) {res.send(post)})
    .catch(err => {console.error(err)})
}

module.exports = {addFriend, removeFriend}