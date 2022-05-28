
exports.succes = function (req, res, message, status = 200) {
    res
        .status(status)
        .send(
            {
                error: '',
                body: message
            }
        )
}

exports.error = function (req, res, message, status = 400) {
    res
        .status(status)
        .send(
            {
                error: message,
                message: ''
            }
        )
}