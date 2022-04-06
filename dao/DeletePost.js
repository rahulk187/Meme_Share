const Post = require('../models/PostModel')

async function deletePost(req, res) {
    await Post.findOneAndUpdate({_id:req.body.post_id}, {$set: {status:3}}, {new:true})
    .then(function (post) {res.send('<h1>post deleted</h1>')})
    .catch(function (err) {})
}

module.exports = deletePost