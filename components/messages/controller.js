const store = require('./store');

function addMessage(chat, user, message) {
    return new Promise((resolve, reject) => {
        if( !chat || !user || !message ){
            console.error('[message controller No hay usuario o messag]')
            reject('Los datos son incorrectos');
        }

        const date = new Date().toDateString();
    
        const fullMessage = {
            chat,
            user,
            message,
            date
        }
    
        console.log(fullMessage);

        store.addMessage(fullMessage);

        resolve(fullMessage);
    });
}

function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve( store.getMessages(filterChat) );
    })
}

function updateMessage(id, message) {
    return new Promise ( async (resolve, reject) => {
        if( !id || !message){
            reject('Invalid Data');
        }

        const result = await store.updateText(id, message);

        resolve(result)
    });
}

function deleteMesagge(id) {
    return new Promise( (resolve, reject) => {
        if( !id ){
            reject('Id invalid');
        }

        store.removeMessage(id)
            .then( () => {
                resolve();
            })
            .catch( (err) => {
                reject(err);
            })
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMesagge
}