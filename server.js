const express = require('express');
const router = express.Router(); 
const bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', (req, res) => {
    res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje añadido');
});

app.listen(3000);

console.log('SERVER --------> OK ON PORT 3000');