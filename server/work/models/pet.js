const db = require('../db/db')
const Sequelize = require('sequelize')

module.exports = db.defineModel('pets', {
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10)
})
