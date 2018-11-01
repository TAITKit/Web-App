const { exec } = require('child_process')
const { join } = require('path')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'));
const pythonScriptPath = 'python/'

const scriptNameReg = /^[.0-9A-Za-z_\-]+$/

var tmpSerial = 0

// A fake service.
module.exports = {
  async start (name, body) {
    let path = join(pythonScriptPath, name) + '.py'
    let serial = tmpSerial
    tmpSerial ++
    if (!scriptNameReg.test(name)) 
      throw new Error('Service not valid')
    if (!fs.existsSync(path)) 
      throw new Error('Service not exists')
    let input = 'input-' + serial + '.tmp'
    let output = 'output-' + serial + '.tmp'
    await fs.writeFileAsync(input, body.data.text)
    return await new Promise ((resolve, reject) => {
      let proc = exec(`python3 ${path} ${input} ${output}`, async (e, out, err) => {
        if (e) {
          reject(e)
        } else {
          let text = await fs.readFileAsync(output, 'utf8')
          await Promise.all([fs.unlinkAsync(input), fs.unlinkAsync(output)])
          resolve(text)
        }
      })
    })
  }
}

