const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers); //receibe headers

    res.header({
        "custom-headers": "Nuestro Header"
    }); //send custom headers

    response.succes(req, res, 'Lista', 201);
});

router.post('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);

    res .status(201)
        .send({
            error: '',
            message: 'Created'
        });
});

module.exports = router;