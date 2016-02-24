'use strict'

const express = require('express')
  , chalk     = require('chalk')
  , io        = require('socket.io')()
  , app       = express()

const port = process.env.PORT || 3000

require('./config/serverConfig.js')(app, express)

io.on('connection', function (socket) {
  console.log('new user connected.')
})

app.listen(port, () => {
  console.log(chalk.green('✔  Server listening on port:', port))
})
