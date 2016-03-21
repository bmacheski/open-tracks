'use strict'

const productionConfig = require('./production')
  , developmentConfig  = require('./development')

module.exports = () => {
  switch(process.env.NODE_ENV) {
    case 'development':
      return developmentConfig
    case 'production':
      return productionConfig
    default:
      console.error('error loading config')
  }
}
