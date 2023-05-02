const slonik = require('slonik');

// Creo el pull de conexiones metiendo la url dentro de una constante
// y meterla en el createPool
const SLONIK_URL = 'slonik://user1:1234@localhost:5432/prueba';

module.exports = slonik.createPool( SLONIK_URL )