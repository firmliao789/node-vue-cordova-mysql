const Router = require('koa-router')

let router = new Router()

// 装载所有子路由
//默认
const home = require('./home')
router.use('/home', home.routes(), home.allowedMethods())

//404
const page404 = require('../controllers/404')
router.use('/page', page404.routes(), page404.allowedMethods())

//user post
const user = require('./user')
router.use('/user', user.routes(), user.allowedMethods())

//user post
const news = require('./news')
router.use('/news', news.routes(), news.allowedMethods())



module.exports = router;
