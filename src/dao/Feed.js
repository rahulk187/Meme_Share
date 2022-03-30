const Post = require('../models/PostModel')

async function showPosts(req, res) {
    await Post.find({}, (err, posts) => {
        res.send(posts)
    })
    .catch(err =>{})
}

module.exports = showPosts