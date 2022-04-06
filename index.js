const express = require('express');
const app = express();
const routes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const db = require('./models/connection');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes);

app.listen(3000)
console.log('listening on http://localhost:3000')