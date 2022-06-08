const store = require('./store');

function addChat(users) {
    if( !users || !Array.isArray(users) ){
        return Promise.reject('Invalid User List');
    }

    const chat = {
        users
    }

    return store.addChat(chat);
}


function listChats(userId) {
    return store.listChats(userId);
}


module.exports = {
    addChat,
    listChats
}