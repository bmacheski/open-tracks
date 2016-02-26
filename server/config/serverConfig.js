'use strict'

const path      = require('path')
  , config      = require('./development')
  , bodyParser  = require('body-parser')


module.exports = (app, express) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(express.static(path.join(config.root, 'client/public')))

  require('../routes')(app)
}
