'use strict'

const Playlist = require('./db/playlist.model')

module.exports = app => {
  app.post('/channel', (req, res) => {
    let channel = req.body.channel
    Playlist.findOne({ channel: channel }, (err, docs) => {
      if (err) res.send(err)
      if (!docs) {
        let playlist = new Playlist({ channel: channel })
        playlist.save(err => {
          if (err) throw err
          res.send({ data: 'Done' })
        })
      } else {
        res.status(409).send({ data: 'Already exists' })
      }
    })
  })
}
