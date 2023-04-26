const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your directors queries
    async q1() {
        // README - Directors.1
     const query = `
     SELECT name 
     FROM  directors
     WHERE name IS NOT NULL
     `;
    
     try {
      const conection = await createPool.getConnection();

        const result = await connection.query(sql`
        SELECT name 
        FROM  directors
        WHERE name IS NOT NULL
        `);
        connection.realease();
        return result.rows.map(row => row.name);

        }   catch (error ) {
            console.error(error)
            throw 'error1';
        }
     
    },
     
    


    async q2() {
        // README - Directors.2
        const query = `
        SELECT query_name, nickname 
        FROM directors 
        WHERE nickname = $1 AND roles = 'director'
        `;

        try {
            const result = await db.query(query);
            return result.rows
            
        } catch (error) {
        console.error(error)
            throw 'error2';
        }
    },
     
   

    async q3() {

    },
        // README - Directors.3
    async q4() {
        // README - Directors.4
    },

    async q5() {
        // README - Directors.5
    },

    async q6() {
        // README - Directors.6
    },

    async q7() {
        // README - Directors.7
    },

    async q8() {
        // README - Directors.8
    },
}