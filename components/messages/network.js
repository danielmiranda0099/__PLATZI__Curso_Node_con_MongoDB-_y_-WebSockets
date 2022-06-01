const express = require('express');
const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getMessages()
                            .then((messageList) => {
                                response.succes(req, res, messageList, 201);
                            })
                            .catch((err) => {
                                response.error(req, res, 'Unespected Error', 500, err);
                            })
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

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const message = req.body.message;

    console.log(message, id);

    controller.updateMessage(id, message)
        .then((data) => {
            response.succes(req, res, data, 200);
        })
        .catch( (err) => {
            response.error(req, res, 'Error interno en el Update', 500, err);
        })
});

module.exports = router;