const res = require('express/lib/response');
const Post = require('../models/PostModel')

async function createComment(req, res) {

    let post_id = req.body.post_id
    let user_id = req.body.user_id
    let comment = req.body.comment

    await Post.findOneAndUpdate
    (
        {_id: post_id}, 
        {$push: {comments: [{comment: comment,commentedUser: user_id}]}}, 
        {new:true}
    )
    .then(function (post) {res.send(post)})
    .catch(err => {console.error(err)})
}


async function deleteComment(req, res) {
    
    let post_id = req.body.post_id
    let commentedUser = req.body.commentedUser

    await Post.updateOne
    (
        {_id: post_id}, 
        {$pull: {comments: {commentedUser: commentedUser}}}, 
        {new:true}
    )
    .then(function (post) {res.send(post)})
    .catch(err => {console.error(err)})
}

module.exports = {createComment, deleteComment}