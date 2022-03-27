const express = require('express');
const app = express();
const routes = require('./routes')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes);

app.listen(3000)
console.log('listening on http://localhost:3000')