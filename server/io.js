'use strict'

module.exports = io => {
  io.on('connection', function (socket) {
    socket.on('join channel', res => {
      socket.join(res.channel)
      console.log(socket)
    })
    socket.on('new song', res => {
      let songObj = { title: res.title, streamUrl: res.streamUrl }
      socket.broadcast.to(res.channel).emit('new song', songObj)
    })

    socket.on('time update', res => {
      console.log(res.time)
      console.log(res.channel)
      socket.broadcast.to(res.channel).emit('client time', res.time)
    })
  })
}
