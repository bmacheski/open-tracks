'use strict'

const path = require('path')
  , config = require('./development')

module.exports = (app, express) => {
  app.use(express.static(path.join(config.root, 'client/public')))
}
