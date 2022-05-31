

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[message controller No hay usuario o messag]')
            reject('Los datos son incorrectos');
        }

        const date = new Date().toDateString();
    
        const fullMessage = {
            user,
            message,
            date
        }
    
        console.log(fullMessage);

        resolve(fullMessage);
    });

}

module.exports = {
    addMessage
}