const express = require('express');
//const router = express.Router();  ** [DEPRECATED]
//const bodyParser = require('body-parser'); ** [DEPRECATED]


var app = express();

//app.use(bodyParser.json()); ** [DEPRECATED]
app.use(express.json());
//app.use(bodyParser.urlencoded({extended: false})); ** [DEPRECATED]
app.use(express.urlencoded({extended:false}));
//app.use(router); ** [DEPRECATED]

app.get('/message', (req, res) => {
    console.log(req.headers); //receibe headers

    res.header({
        "custom-headers": "Nuestro Header"
    }); //send custom headers

    res.send('Lista de mensajes');
});

app.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje añadido');
});

app.listen(3000);

console.log('SERVER --------> OK ON PORT 3000');