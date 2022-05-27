const express = require('express');
const router = express.Router();

var app = express();


app.use(router);

router.get('/message', (req, res) => {
    res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
    res.send('Mensaje añadido');
});

app.listen(3000);

console.log('SERVER --------> OK ON PORT 3000');