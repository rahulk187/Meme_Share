const Post = require('../models/PostModel')
const fs = require('fs')

async function createPostWithImage(req,res){
    var img = fs.readFileSync(req.file.path)
    var encode_image = img.toString('base64')

    // var finalImage = {
    //     contentType: req.file.mimetype,
    //     image: new Buffer(encode_image, 'base64')
    // }

    const post = new Post({
        post: {
            // image: {
            //     data: new Buffer(encode_image, 'base64'),
            //     contentType: req.file.mimetype
            // },
            text: req.body.quote,
            created: new Date()
        },
        likes: 0,
        user_id: req.body.user_id,
        status: 1
    }) 
    await post.save()
    .catch(function(err){})
    // res.contentType(finalImage.contentType)
    // res.send(finalImage.image)
    res.send(post)
}

async function createPostWithoutImage(req,res){
    // var img = fs.readFileSync(req.file.path)
    // var encode_image = img.toString('base64')

    // var finalImage = {
    //     contentType: req.file.mimetype,
    //     image: new Buffer(encode_image, 'base64')
    // }

    const post = new Post({
        post: {
            // image: {
            //     data: new Buffer(encode_image, 'base64'),
            //     contentType: req.file.mimetype
            // },
            text: req.body.quote,
            created: new Date()
        },
        likes: 0,
        user_id: req.body.user_id,
        status: 1
    }) 
    await post.save()
    .catch(function(err){})
    // res.contentType(finalImage.contentType)
    // res.send(finalImage.image)
    res.send(post)
}

module.exports = {createPostWithImage, createPostWithoutImage}