const coffee = require('coffeescript')
const loadBabelConfig = require('./lib/load-babel-config')

module.exports = {
  process: (src, path) => {
    const script = coffee.compile(
      src,
      {
        bare: true,
        sourceMap: true,
        transpile: Object.assign({}, loadBabelConfig(), { filename: path })
      }
    )
    return {
      code: script.js,
      map: script.v3SourceMap
    }
  }
}
