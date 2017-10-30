const Router = require('koa-router')

const news = new Router();

const newsCtrl = require('../controllers/news')

news.get('/news_list', newsCtrl.getNewsList)

module.exports = news;