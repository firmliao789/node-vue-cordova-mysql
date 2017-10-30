const Router = require('koa-router')

const userCtrl = require('../controllers/user')

let user = new Router();

user
    .post('/register', userCtrl.signIn)
    .post('/login', userCtrl.signUp)

module.exports = user
