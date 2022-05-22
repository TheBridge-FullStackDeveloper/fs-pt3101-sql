const { sql } = require("slonik");
const { v4: uuidv4 } = require("uuid");

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

const postType = (db) => async (names) => {
    try {
        for await (const name of names) {
            try {
                await db.query(sql`
                INSERT INTO elements (
                    id, name
                ) VALUES (
                    ${uuidv4()}, ${name}
                ) ON CONFLICT DO NOTHING;
            `);
            } catch (error) {
                console.error('postType for await error: ', error.message);
            };
        };

        return {
            ok: true,
        };
        
    } catch (error) {
        console.info("error at postType types");
        console.error(error.message);

        return {
            ok: false,
        };
    };
};



module.exports = {
    selectAll,
    postType,
}