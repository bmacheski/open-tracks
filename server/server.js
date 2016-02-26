'use strict'

const express = require('express')
  , chalk     = require('chalk')
  , socketio  = require('socket.io')()
  , mongoose   = require('mongoose')
  , config    = require('./config/development')
  , app       = express()

const server = app.listen(3000, () => {
  console.log(chalk.green('✔  Server listening on port 3000'))
})
const io = socketio.listen(server)

mongoose.connect(config.dbUrl)

require('./config/serverConfig.js')(app, express)

io.on('connection', function (socket) {
  console.log('new user connected.')
})
