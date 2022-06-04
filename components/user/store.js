const Model = require('./model');

function getUser() {
    const users = Model.find();
    return users;
}

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}


module.exports = {
    getUser, 
    addUser
}