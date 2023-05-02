const { hash } = require("simple-stateless-auth-library");
const { createUser } = require("../../models/auth");
const errors = require("../../misc/errors");

//Ejercicio 15
module.exports = (db) => async (req,res,next) => {
    const {email, password} = req.body;

    if(!email || !password) return next(errors[400]);

    const encryptedPassword = await hash.encrypt(password);

    const response = await createUser(await db)(email, encryptedPassword);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true
    })
}