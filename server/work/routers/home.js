const Router = require('koa-router')

const homeCtrl = require('../controllers/home')

let home = new Router()

home.get('/', homeCtrl.get).get('/news', homeCtrl.getNews);

module.exports = home

