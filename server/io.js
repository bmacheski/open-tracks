'use strict'

module.exports = io => {
  io.on('connection', socket => {

    socket.on('join channel', data => {
      socket.join(data.channel)
    })

    socket.on('new song', data => {
      let songObj = {
        title: data.title,
        streamUrl: data.streamUrl,
        duration: data.duration,
        artworkUrl: data.artworkUrl
      }
      socket.broadcast.to(data.channel).emit('new song', songObj)
    })

    socket.on('time update', data => {
      socket.broadcast.to(data.channel).emit('client time', data.time)
    })

    socket.on('next song index', data => {
      socket.broadcast.to(data).emit('playlist index increment')
    })

    socket.on('song removed', data => {
      socket.broadcast.to(data.channel).emit('playlist song removed', data.index)
    })

    socket.on('song playing:c', data => {
      socket.broadcast.to(data).emit('song playing')
    })

    socket.on('song paused:c', data => {
      socket.broadcast.to(data).emit('song not playing')
    })
  })
}
