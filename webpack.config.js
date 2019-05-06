const path = require('path')
const chalk = require('chalk')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// $ webpack --env.NODE_ENV=production
module.exports = function(env = { NODE_ENV: 'development' }, argv) {
  const NODE_ENV = process.env.NODE_ENV || env.NODE_ENV
  const isProduction = NODE_ENV === 'production'
  console.log(chalk.green('NODE_ENV=' + NODE_ENV))

  return {
    entry: './app/client.js',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    output: {
      path: path.join(__dirname, 'static'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
}
