// Cannot directly use in code.
// Behavior of process.env.blabla in client / server dosn't consistant
// Should pass as environment variable in nuxt.config.js
module.exports = {
  host: process.env.REMOTE ? 'taitk.org' : 'localhost',
  port: process.env.REMOTE ? '2999' : '3000'
}
