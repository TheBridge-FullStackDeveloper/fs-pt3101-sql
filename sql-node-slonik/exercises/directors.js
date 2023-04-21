const db = require("../configs/db");
const { sql } = require("slonik");

module.exports = {
  // Your directors queries
  async q1() {
    // README - Directors.1
    return await db.query(sql`
        SELECT name FROM directors
        WHERE name != ''        
  `);
  },

  async q2() {
    // README - Directors.2
    return await db.query(sql`
    SELECT query_name, nickname FROM directors
    `);
  },

  async q3() {
    // README - Directors.3
    return await db.query(sql`
    SELECT pic, nickname FROM directors
    WHERE nickname != ''    
    `); // me devuelve algunos nicknames sin valor
  },

  async q4() {
    // README - Directors.4
    return await db.query();
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
};
