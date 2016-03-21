'use strict'

const path     = require('path')
  , bodyParser = require('body-parser')
  , cors       = require('cors')
  , config     = require('./development')

module.exports = (app, express) => {
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(express.static(path.join(config.root, 'client/public')))

  require('../routes')(app)

  app.use(function(err, req, res, next) {
    console.error(err)
    res.status(500).send('server error')
  })
}
