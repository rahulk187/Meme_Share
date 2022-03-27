const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/Meme_Share')
.then(()=> {console.log('Connect')})
.catch((err)=> {console.log(err)});

module.exports = connection