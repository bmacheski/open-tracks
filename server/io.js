'use strict'

module.exports = io => {
  io.on('connection', function (socket) {
    socket.on('join channel', (res) => {
      socket.join(res.channel)
    })
    socket.on('new song', (res) => {
      let songObj = { title: res.title, streamUrl: res.streamUrl }
      socket.broadcast.to(res.channel).emit('new song added', songObj)
    })
  })
}
