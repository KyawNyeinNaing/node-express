const sassMiddleware = require('node-sass-middleware')
const path = require('path')

const sassConfig = sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/style'),
  indentedSyntax: false,
  sourceMap: true,
  debug: false,
  outputStyle: 'compressed'
})

module.exports = sassConfig