const store = require('./store');

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if( !chat || !user || !message ){
            console.error('[message controller No hay usuario o messag]')
            reject('Los datos son incorrectos');
        }

        let fileUrl = file ? 'http://localhost:3000/public/files/' + file.originalname : ""

        const date = new Date().toDateString();
    
        const fullMessage = {
            chat,
            user,
            message,
            file: fileUrl,
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