const Router = require('koa-router')
const KoaBody = require('koa-body')
const koaBody = KoaBody()

const service = require('./service')

const nuxtRender = nuxt => ctx => new Promise((resolve, reject) => {
  ctx.res.on('close', resolve)
  ctx.res.on('finish', resolve)
  nuxt.render(ctx.req, ctx.res, promise => {
    // nuxt.render passes a rejected promise into callback on error.
    promise.then(resolve).catch(reject)
  })
})

// Should from DB
apps = [
  { name: 'Jieba Segementation', bindName: 'jieba-service', author: 'Sun Junyi' },
  { name: 'Discourse', bindName: 'discourse', author: 'calin' }
]

module.exports = nuxt => {
  let render = nuxtRender(nuxt)
  return Router()
    .post('/api/short/:name', koaBody, async (ctx, next) => {
      ctx.status = 200
      ctx.body = await service.start(ctx.params.name, ctx.request.body)
    })
    .get('/api/app', async (ctx, next) => {
      ctx.status = 200
      ctx.body = apps
    })
    .get('/api/app/:name', async (ctx, next) => {
      ctx.status = 200
      ctx.body = apps.find(i => i.bindName == ctx.params.name)
    })
    .get('/(.*)', async (ctx, next) => {
      ctx.status = 200
      await render(ctx)
      await next()
    })
}
