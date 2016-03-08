'use strict'

module.exports = io => {

  io.on('connection', function (socket) {

    socket.on('join channel', res => {
      socket.join(res.channel)
    })

    socket.on('new song', res => {
      let songObj = {
        title: res.title,
        streamUrl: res.streamUrl,
        duration: res.duration,
        artworkUrl: res.artworkUrl
      }
      socket.broadcast.to(res.channel).emit('new song', songObj)
    })

    socket.on('time update', res => {
      socket.broadcast.to(res.channel).emit('client time', res.time)
    })

    socket.on('next song index', res => {
      socket.broadcast.to(res).emit('playlist index increment')
    })
  })
}
