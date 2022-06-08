const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/', (req, res) => {
    const users = req.body.users;

    controller.addChat(users)
        .then( data => {
            response.succes(req, res, data, 201);
        })
        .catch( err => response.error(req, res, 'Internal Error', 500, err))
});

router.get('/:userId', (req, res) => {
    const userId = req.params.userId;

    controller.listChats(userId)
        .then( users => {
            response.succes(req, res, users, 200);
        })
        .catch( err => response.error(req, res, 'Internal Error', err))
});

module.exports = router;