const { hash } = require('simple-stateless-auth-library')
const { createUser } = require('../../models/auth')

module.exports = (db) => async (req, res, next) => {
    const { email, password } = req.body
    
    const encrypted = await hash.encrypt(password)

    const response = await createUser(await db)(email, encrypted)

    if(!response.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })
    res.status(200).json({
        success: true,
    })
}