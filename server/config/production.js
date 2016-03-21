'use strict'

const path = require('path')

const MONGODB_USER   = process.env.MONGOLAB_USER || 'username'
  , MONGODB_PASSWORD = process.env.MONGOLAB_PASS || 'password'

module.exports = {
  root: path.join(__dirname, '/../..'),
  mongo: {
    url: process.env.MONGODB_URL || 'mongodb://' + MONGODB_USER + ':' + MONGODB_PASSWORD +
    '@ds051933.mongolab.com:51933/open-tracks'
  }
}
