'use strict'

module.exports = (io) => {
  io.on('connection', function (socket) {
    console.log('new user connected.')
  })
}
