const db = require('../db/db');
const Sequelize = require('sequelize')


module.exports = db.defineModel('users', {
    email: {
        type: Sequelize.STRING(100),
        unique: true
    },
    mobile:Sequelize.INTEGER(11),
    passwd: Sequelize.STRING(100),
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN
});
