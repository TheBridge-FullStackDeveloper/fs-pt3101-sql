const slonik = require('slonik')

module.exports = slonik.createPool(require('../constants').DB_URL_DEV)