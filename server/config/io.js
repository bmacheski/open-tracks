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

    socket.on('song removed', res => {
      socket.broadcast.to(res.channel).emit('playlist song removed', res.index)
    })

    socket.on('song playing:c', res => {
      socket.broadcast.to(res).emit('song playing')
    })

    socket.on('song paused:c', res => {
      socket.broadcast.to(res).emit('song not playing')
    })
  })
}
