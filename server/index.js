require('@babel/register')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = require('./server')
