const express = require('express');
const multer = require('multer');

const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/files/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })


router.get('/', (req, res) => {
    const filterMessages = req.query.chat || null;

    controller.getMessages(filterMessages)
                            .then((messageList) => {
                                response.succes(req, res, messageList, 201);
                            })
                            .catch((err) => {
                                response.error(req, res, 'Unespected Error', 500, err);
                            })
});

router.post('/', upload.single('file'), (req, res) => {
    const {chat, user, message} = req.body;
    controller.addMessage(chat, user, message, req.file)
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

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    controller.deleteMesagge(id)
        .then( () => {
            response.succes(req, res, `Usuario ${id} Eliminado`, 200)
        })
        .catch( (err) => {
            response.error(req, res, 'Error Interno eliminando usuario', 500, err);
        })
});

module.exports = router;