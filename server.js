const express = require('express');
const response = require('./network/response');


var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/message', (req, res) => {
    console.log(req.headers); //receibe headers

    res.header({
        "custom-headers": "Nuestro Header"
    }); //send custom headers

    response.succes(req, res, 'Lista', 201);
});

app.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);

    res .status(201)
        .send({
            error: '',
            message: 'Created'
        });
});

app.use('/app', express.static('public'));


app.listen(3000);

console.log('SERVER --------> OK ON PORT 3000');