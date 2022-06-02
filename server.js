const express = require('express');

const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://admin:admin@clustercursodenode.yzk8umk.mongodb.net/?retryWrites=true&w=majority');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//app.use(router);
router(app);


app.use('/app', express.static('public'));


app.listen(3000);

console.log('SERVER --------> OK ON PORT 3000');