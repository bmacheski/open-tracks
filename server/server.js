'use strict'

const express = require('express')
  , socketio  = require('socket.io')()
  , chalk     = require('chalk')
  , mongoose  = require('mongoose')
  , config    = require('./config/environment')()
  , app       = express()

mongoose.connect(config.mongo.url)

const port = process.env.PORT || 3000
const server = app.listen(port, () => console.log(chalk.green('✔ Server listening on port:', port)))
const io = socketio.listen(server)

require('./config/serverConfig.js')(app, express)
require('./io')(io)
