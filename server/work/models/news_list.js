const db = require('../db/db')
const Sequelize = require('sequelize')

module.exports = db.defineModel('news_list', {
    title: Sequelize.STRING(200),
    description: Sequelize.STRING(500),
    summary: Sequelize.STRING(500),
    date: Sequelize.BIGINT,
    link: Sequelize.STRING(100),
    guid: Sequelize.STRING(100),
    author: Sequelize.STRING(30),
    comments: Sequelize.STRING(4000),
    origlink: Sequelize.STRING(100),
    image: Sequelize.BLOB,
    source: Sequelize.STRING(100),
    categories: Sequelize.STRING(50),
    enclosures: Sequelize.STRING(100)
})