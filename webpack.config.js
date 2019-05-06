const path = require('path')
const webpack = require('webpack')
const chalk = require('chalk')

module.exports = function(env, argv) {
  const isProduction = env.production || process.env.NODE_ENV === 'production'
  console.log(chalk.green('mode=' + (isProduction ? 'production' : 'development')))

  let config = {}
}
