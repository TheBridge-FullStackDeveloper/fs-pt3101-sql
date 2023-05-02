const { deserialize } = require('simple-stateless-auth-library')


module.exports = (req, res, next) => {
    const payload = deserialize(req)

    if(!payload) return next({
        statusCode: 401,
        error: new Error('unauthorized')})

    res.locals = payload

    next()
}