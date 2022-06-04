const Model = require('./model');


console.log('[db] Conectada con exito');

function addMessage (message) {
    const myMessage = new Model(message);
    myMessage.save();
}

function getMessages(filterUser) {
    return new Promise( (resolve, reject) => {
        let filter = {};

        if(filterUser){
            filter = {user: filterUser}
        }
        
        Model.find( filter )
            .populate('user')
            .exec( (err, populated) => {
                if(err) reject(err);

                resolve(populated);
            })
            //.catch( err => reject(err)); //Is not required.
    });
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