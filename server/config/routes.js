'use strict'

const Playlist = require('../db/playlist.model')
  , Song       = require('../db/song.model')

module.exports = app => {

  app.post('/channel', (req, res) => {
    Playlist
      .findOne({ channel: req.body.channel },
      (err, docs) => {
        if (err) res.send(err)
        if (!docs) {
          let playlist = new Playlist({ channel: req.body.channel })
          playlist.save(err => {
            if (err) throw err
            res.send({ data: 'Done' })
          })
        } else {
          res.status(409).send({ message: 'That channel already exists.' })
        }
      })
  })

  app.post('/channel/join', (req, res) => {
    Playlist
      .findOne({ channel: req.body.channel },
        (err, docs) => {
          if (err) res.send(err)
          if (!docs) {
            res.status(409).send({ message: 'That channel does not exist.' })
        } else {
          res.status(200).send({ message: 'That room exists.' })
        }
      })
  })

  app.get('/playlist/:channel', (req, res) => {
    Playlist
      .findOne({ channel: req.params.channel })
      .populate('songs')
      .exec((err, items) => {
        res.send({ items: items.songs })
      })
  })

  app.post('/song', (req, res) => {
    let song = new Song({
      title: req.body.title,
      track: req.body.streamUrl,
      artworkUrl: req.body.artworkUrl,
      duration: req.body.duration
    })

    Playlist
      .findOne({ channel: req.body.channel })
      .populate('songs')
      .exec((err, items) => {
        if (err) throw err
        items.songs.push(song._id)
        song.save()
        items.save()
      })
    res.status(200).send({ message: 'Song saved successfully.'})
  })
}
