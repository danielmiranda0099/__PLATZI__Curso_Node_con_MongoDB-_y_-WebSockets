const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getUsers()
        .then( (data) => {
            response.succes(req, res, data, 200);
        })
        .catch( (err) => {
            response.error(req, res, 'Internal Error', 500, err);
        })
})

router.post('/', (req, res) => {
    const name = req.body.name; 

    controller.addUser(name)
        .then( (data) => {
            response.succes(req, res, data, 201);
        })
        .catch( (err) => {
            response.error(req, res, 'Internal Error', 500, err)
        })
});

module.exports = router;