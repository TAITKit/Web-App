export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.pageData = async ctx => {
    return (await ctx.app.$axios.get(`/api${ctx.route.path}`)).data
  }
}
