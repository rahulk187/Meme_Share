const Post = require('../models/PostModel')

async function setLikePost(req, res) {
    
    Post.updateOne
        (
            { _id: req.body.post_id },
            { $inc: { likes: 1 }, $push: { likedBy: {userId:  req.body.user_id} } },
            { new: true }
        )
        .then(function (post) { res.send(post) })
        .catch(function (err) { console.error(err) })
}

module.exports = setLikePost