const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./queries');
const { request, response } = require('express');
const port = 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
    response.json({info: 'ecommsite project API'})
});

app.get('/users', db.getAllUsers);

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
});