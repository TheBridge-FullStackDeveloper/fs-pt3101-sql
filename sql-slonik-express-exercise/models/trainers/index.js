const { selectAllTrainers } = require('./queries')
const {selectAllTrainersTodos} = require('./queries')
const { v4: uuidv4 } = require("uuid")
const { sql } = require("slonik")

//const {sql} = require('slonik') 
const selectAllTodos = (db) => async () => {
    try {
        const response = await db.query(selectAllTrainersTodos());

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}





const selectAll = (db) => async (name) => {
    try {
        const response = await db.query(selectAllTrainers(name));

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

const selectNew = (db) => async (trainer) => {
    
        try {
            const newTrainerId = uuidv4();
            await db.query(sql.unsafe`
                INSERT INTO leaders (
                    id, name, badge, description
                ) VALUES (
                    ${newTrainerId}, ${trainer.name}, ${trainer.badge}, ${trainer.description}
                );
            `)
    
            await db.query(sql.unsafe`
                INSERT INTO gyms (
                    city, leader_id
                ) VALUES (
                    ${trainer.city}, ${newTrainerId}
                );
            `)
    
            return {
                ok: true,
                data: trainer,
            }
        } catch (error) {
            console.log(error.message);
    
            return {
                ok: false
            }
        }
}  

module.exports = {
    selectAll,
    selectAllTodos,
   selectNew,
}