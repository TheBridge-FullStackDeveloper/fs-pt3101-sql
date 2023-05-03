const db = require('../configs/db')
const { sql } = require('slonik')
const directors_movies = require('./directors_movies')

module.exports = {
    // Your directors queries

   //1. Devuelve el `name` de todos los directores cuyo campo `name` no esté vacío

     async q1() {
        return await db.query(sql`SELECT name FROM directors WHERE name IS NOT NULL
        
        `).rows
        // README - Directors.1
    },
   // 2. Devuelve `query_name` y sus correspondientes `nicknames`

    async q2() {
        return await db.query(sql`SELECT query_name, nickname FROM directors  `)
        // README - Directors.2
    },
   //3. Devuelve `pic` y `nickname` de todos aquellos directores que tengan `nickname`
    async q3() {
        return await db.query(sql`SELECT pic,nickname FROM directors WHERE nickname != '' `)
        // README - Directors.3
    },
  //  4. Devuelve `query_name` y nacionalidad de todos aquellos directores que sean de origen canadiense.
    async q4() {
        return await db.query(sql`SELECT query_name,nationality FROM directors WHERE nationality = 'canadiense'`)
        // README - Directors.4
    },
   //5. Devuelve `query_name` y nacionalidad de todos aquellos directores que sean de origen británico-estadounidense (vigila cómo están guardados esos datos. Tienen que ser las dos cosas juntas)
    async q5() {
        return await db.query(sql`SELECT query_name,nationality FROM directors WHERE nationality IN ('británica,estadounidense','estadounidense,británico' )`)
        // README - Directors.5
    },
   //6. Devuelve `query_name`, nacionalidad y roles de aquellos directores que sean ajedrecistas
    async q6() {
        return await db.query(sql`SELECT query_name, nationality, roles FROM directors WHERE roles LIKE '%_ajedrecista_%' `)
        // README - Directors.6
    },
   //7. Devuelve `query_name`, `name` y nacionalidad de aquellos directores que tengan, al menos, dos nacionalidades
    async q7() {
        return await db.query(sql`SELECT query_name,name,nationality FROM directors WHERE nationality LIKE '%,%'`)
        // README - Directors.7
    },
  //8. Devuelve `query_name` y roles de aquellos directores que tengan más de 3 roles
    async q8() {
        return await db.query(sql`SELECT query_name, roles FROM directors WHERE roles LIKE '%,%,%'`)
        // README - Directors.8
    },
}