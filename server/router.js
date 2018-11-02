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
  { 
    name: 'Jieba Segementation',
    bindName: 'jieba-service',
    author: 'Sun Junyi',
    description: 'This is jieba segmentation for chineses made by Sun Junyi.',
    inputs: [
      {
        name: 'text',
        type: 'text',
        description: 'The chinese text to be segmented'
      },
      {
        name: 'suffix',
        type: 'text',
        description: 'The suffix of output. Just for testing.'
      }
    ],
    configs: [
      {
        name: 'text-config',
        type: 'text',
        default: 'default-text'
      },
      {
        name: 'boolean-config',
        type: 'boolean',
        default: true
      }
    ]
  },
  { name: 'Discourse', bindName: 'discourse', author: 'calin' },
  {
    name: 'Computer Vision',
    bindName: 'computer-vision',
    author: 'nan',
    description: 'Computer vision input test: add caption to image',
    inputs: [
      {
        name: 'image',
        type: 'file',
        description: 'The base'
      },
      {
        name: 'caption',
        type: 'text',
        description: 'The adding caption'
      }
    ],
    configs: []
  }
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
      ctx.body = apps.find(i => i.bindName === ctx.params.name)
    })
    .get('/(.*)', async (ctx, next) => {
      ctx.status = 200
      await render(ctx)
      await next()
    })
}
