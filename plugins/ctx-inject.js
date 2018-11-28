export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.pageData = async ctx =>
    (await ctx.app.$axios.get(ctx.env.baseUrl + `/api${ctx.route.path}`)).data
}
