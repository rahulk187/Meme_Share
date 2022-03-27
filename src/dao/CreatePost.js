const Post = require('../models/PostModel')

async function createPost(req,res){
    const post = new Post({
        post: {
            image: '',
            text: '',
            created: new Date()
        },
        likes: 0,
        user_id: req.body.user_id,
        status: 1
    }) 
    await post.save()
    .catch(function(err){})
    res.send(post)
}

module.exports = createPost