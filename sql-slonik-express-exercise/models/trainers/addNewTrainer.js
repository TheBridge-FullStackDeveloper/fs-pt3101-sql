const { sql } = require("slonik");
const { v4: uuidv4 } = require("uuid");

module.exports = (db) => async (trainerInfo) => {
    try {
        const newTrainerId = uuidv4();

        await db.query(sql.unsafe`
            INSERT INTO leaders (
                id, name, badge, description
            ) VALUES (
                ${newTrainerId}, ${trainerInfo.name}, ${trainerInfo.badge}, ${trainerInfo.description}
            );
        `)

        await db.query(sql.unsafe`
            INSERT INTO gyms (
                city, leader_id
            ) VALUES (
                ${trainerInfo.city}, ${newTrainerId}
            );
        `)

        return {
            ok: true,
            data: trainerInfo
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false
        }
    }
}