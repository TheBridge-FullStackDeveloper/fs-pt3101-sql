const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your directors queries
    async q1() {
        // README - Directors.1
        try{
            return await db.query(sql`
                SELECT name FROM directors
                WHERE name != ''
            `)
        }
        catch( error ){
            console.log('> Error seleccionando la tabla: ', error.message);
        }
    },

    async q2() {
        // README - Directors.2
        try{
            return await db.query(sql`
                SELECT query_name, nickname 
                FROM directors
                WHERE nickname != ''          
            `)

        }
        catch( error ){
            console.log( '> Error seleccionando el elemento...' );
        }
    },

    async q3() {
        // README - Directors.3
        try{
            return await db.query(sql`
                SELECT pic, name 
                FROM directors
                WHERE nickname != ''
            `)
        }
        catch( error ){
            console.log( '> Error seleccionando el elemento...' );
        }
    },

    async q4() {
        // README - Directors.4
        try{
            return await db.query(sql`
                SELECT query_name, nationality
                FROM directors
                WHERE nationality = 'canadiense'
            `)
        }
        catch( error ){
            console.log( '> Error seleccionando el elemento...' );
        }
    },

    async q5() {
        // README - Directors.5
        try{
            return await db.query(sql`
            
            `)
        }
        catch( error ){
            console.log( '> Error seleccionando el elemento...' );
        }
    },

    async q6() {
        // README - Directors.6
        try{
            return await db.query(sql`
            
            `)
        }
        catch( error ){
            console.log( '> Error seleccionando el elemento...' );
        }
    },

    async q7() {
        // README - Directors.7
        try{
            return await db.query(sql`
            
            `)
        }
        catch( error ){
            console.log( '> Error seleccionando el elemento...' );
        }
    },

    async q8() {
        // README - Directors.8
        try{
            return await db.query(sql`
            
            `)
        }
        catch( error ){
            console.log( '> Error seleccionando el elemento...' );
        }
    },
}