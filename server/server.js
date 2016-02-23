'use strict'

const express = require('express')
  , chalk     = require('chalk')
  , app       = express()

const port = process.env.PORT || 3000

require('./config/serverConfig.js')(app, express)

app.listen(port, () => {
  console.log(chalk.green('✔  Server listening on port:', port))
})
