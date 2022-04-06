const express = require('express');
const routes = express.Router();

const {persistUserWithDp, persistUserWithoutDp} = require('../dao/CreateUser');
const login = require('../dao/LoginUser');
const update = require('../dao/UpdateUser');
const inactive = require('../dao/InactiveUser');
const {createPostWithImage, createPostWithoutImage} = require('../dao/CreatePost');
const setLikePost = require('../dao/LikePost');
const deletePost = require('../dao/DeletePost');
const {createComment, deleteComment} = require('../dao/Comment');
const showPosts = require('../dao/Feed');
const {addFriend, removeFriend} = require('../dao/Friend')

const multer = require('multer');
const path = require('path');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });


// User API's

routes.post('/createUserWithdp', upload.single('dp'), (_,response)=>{
    persistUserWithDp(_,response)
    .catch(err => {})
})

routes.post('/createUserWithoutdp', (_,response)=>{
    persistUserWithoutDp(_,response)
    .catch(err => {})
})

routes.post('/loginUser', (_,response)=>{
    login(_,response)
    .catch(err => {})
})

routes.post('/updateUser',(_,response)=>{
    update(_,response)
    .catch(err => {})
})

routes.get('/inactiveUser',(_,response)=>{
    inactive(_,response)
    .catch(err => {})
})

// Post API's 

routes.post('/createPostWithImage', upload.single('image'), (_,response)=>{
    createPostWithImage(_,response)
    .catch(err => {})
})

routes.post('/createPostWithoutImage', (_,response)=>{
    createPostWithoutImage(_,response)
    .catch(err => {})
})

routes.post('/likePost',(_,response)=>{
    setLikePost(_,response)
})

// routes.get('/sharePost',(_,response)=>{
//     // single 
//     // multiple 
//     response.end('create user api')
// })

routes.post('/deletePost',(_,response)=>{
    deletePost(_,response)
})

routes.post('/createComment',(_,response)=>{
    createComment(_,response)
    .catch(error=>{})
})

routes.post('/deleteComment',(_,response)=>{
    deleteComment(_,response)
})

// Friend API's 

routes.post('/addFriend',(_,response)=>{
    addFriend(_,response)
})

routes.post('/removeFriend',(_,response)=>{
    removeFriend(_,response)
})

// Feed API's 

routes.post('/feed',(_,response)=>{
    showPosts(_,response)
})

// Image API's 

routes.post('/uploadDp', upload.single('dp'), (_,response)=>{
    response.end()
})

routes.post('/uploadImage', upload.single('image'), (_,response)=>{
    response.end()
})

module.exports = routes;