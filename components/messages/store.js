const Model = require('./model');


console.log('[db] Conectada con exito');

function addMessage (message) {
    const myMessage = new Model(message);
    myMessage.save();
    console.log('ya debio de crearce');
}

async function getMessages(filterUser) {
    let filter = {};
    if(filterUser){
        filter = {user: filterUser}
    }
    const messeges = await Model.find( filter );
    return messeges;
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne(
        {
            _id: id
        }
    );

    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne(
        {
            _id: id
        }
    );
}

module.exports = {
    addMessage,
    getMessages,
    updateText,
    removeMessage
}