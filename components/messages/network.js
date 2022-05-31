const express = require('express');
const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers); //receibe headers

    res.header({
        "custom-headers": "Nuestro Header"
    }); //send custom headers

    response.succes(req, res, 'Lista', 201);
});

router.post('/', (req, res) => {
    const {body} = req;
    controller.addMessage(body.user, body.message)
        .then( (fullmessage) => {
            response.succes(req, res, fullmessage, 201);
        })
        .catch( () => {
            response.error(req, res, 'Informacion invalida', 400, 'error en el envio de mensaje')
        })
});

module.exports = router;