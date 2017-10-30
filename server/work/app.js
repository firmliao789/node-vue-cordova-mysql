const Koa = require('koa')
const app = new Koa();
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const router = require('./routers/index')
// const session = require('./session')

const news = require('./controllers/news')


// news.initNewsList();


// 使用ctx.body解析中间件
app.use(bodyParser())
// 使用中间件支持可跨域
app.use(cors())
//session
// app.use(session)
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(8088)

