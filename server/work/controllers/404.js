const Router = require('koa-router')

module.exports = new Router().get('/404', async(ctx) => {
    let html = `<div style="text-align: center;">
 <h1>404</h1>
    <p>抱歉页面失踪了</p>
</div>`
    ctx.body = html;
})
