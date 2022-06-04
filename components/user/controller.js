const store = require('./store');

function getUsers() {
    return store.getUser();
}

function addUser(name) {
    if(!name){
        return Promise.reject('Invalid name en controller');
    }

    const user = {
        name
    }

    return store.addUser(user);
}


module.exports = {
    addUser,
    getUsers
}