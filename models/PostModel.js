const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    post: {
        // image: {
        //     data: Buffer,
        //     contentType: String
        // },
        text: String,
        created: Date
    },
    likes: Number,
    likedBy: [
        {userId: Number}
    ],
    comments: [{
        comment: String,
        commentedUser: Number
    }],
    user_id: Number,
    status: Number
})

const Post = new mongoose.model('Post', postSchema)

module.exports = Post