const Router = require('koa-router')
const KoaBody = require('koa-body')
const koaBody = KoaBody()

const nuxtRender = nuxt => ctx => new Promise((resolve, reject) => {
  ctx.res.on('close', resolve)
  ctx.res.on('finish', resolve)
  nuxt.render(ctx.req, ctx.res, promise => {
    // nuxt.render passes a rejected promise into callback on error.
    promise.then(resolve).catch(reject)
  })
})

module.exports = nuxt => {
  let router = Router()
  let render = nuxtRender(nuxt)
  router
    .get('/(.*)', async (ctx, next) => {
      ctx.status = 200
      await render(ctx)
      await next()
    })
    .post('/api/:name', koaBody, (ctx, next) => {
      // :name => ctx.params.name
      ctx.status = 200
      ctx.body = ctx.params.name + ctx.request.body 
    })
    .get('/api/:name', (ctx, next) => {
      ctx.status = 200
      ctx.body = ctx.params.name
    })
  return router
}
