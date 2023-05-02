const insertUser = require("./insertUser");
const selectByEmail = require("./selectByEmail")

//Ejercicio 15
const createUser = (db) => async (email, password) => {
    try {
        await db.query(insertUser(email, password));
        
        return {
            ok: true
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false
        }
    }
}

//Ejercicio 16
const selectUser = (db) => async (email, compareFn) => {
    try {
        const user = await db.maybeOne(selectByEmail(email))

        if(!user) return {
            ok: false,
            error_code: 'wrong_data'
        }

        const areEqual = await compareFn(user.password);

        if(!areEqual) return {
            ok: false,
            error_code: 'wrong_data'
        }

        return {
            ok: true,
            content: user.email
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false
        }
    }
}

module.exports = {
    createUser,
    selectUser,
}

