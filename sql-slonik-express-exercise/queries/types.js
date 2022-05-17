const { sql } = require("slonik");

const selectAll = (db) => async () => {
    try {
        const rawTypes = await db.query(sql`
        SELECT DISTINCT name
        FROM elements
        `);
        
        const types = rawTypes.rows;
        
        return {
            ok: true,
            data: types,
        };
    } catch (error) {
        console.info("error at selectAll pokemon");
        console.error(error.message);

        return {
            ok:false,
        };
    };
};

module.exports = {
    selectAll,
}