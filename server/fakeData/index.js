const fs = require('fs')
const dir = './server/fakeData/'
const apps = fs.readdirSync(dir)
  .filter(file => file.endsWith('.json'))
  .map(file => JSON.parse(fs.readFileSync(dir + file, 'utf8')))

module.exports = { apps }