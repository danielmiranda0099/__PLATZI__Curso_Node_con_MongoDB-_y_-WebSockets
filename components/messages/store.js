const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;

//          mongodb+srv://admin:admin@clustercursodenode.mjbgkeh.mongodb.net/?retryWrites=true&w=majority
db.connect('mongodb+srv://admin:admin@clustercursodenode.yzk8umk.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true
});

console.log('[db] Conectada con exito');

function addMessage (message) {
    //ist.push(message);
    console.log('Creating..........')
    const myMessage = new Model(message);
    myMessage.save();
    console.log('ya debio de crearce');
}

async function getMessages() {
    //return list;
    const messeges = await Model.find();
    return messeges;
}

module.exports = {
    addMessage,
    getMessages
}