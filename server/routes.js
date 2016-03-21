'use strict'

const Playlist = require('./db/playlist.model')
  , Song       = require('./db/song.model')

module.exports = app => {
  app.post('/channel', (req, res) => {
    Playlist
      .findOne({ channel: req.body.channel })
      .exec((err, docs) => {
        if (err) return next(err)

        if (!docs) {
          let playlist = new Playlist({ channel: req.body.channel })

          playlist.save(err => {
            if (err) return next(err)

            res.send({ data: 'Done' })
          })
        } else {
          res.status(409).send({ message: 'That channel already exists.' })
        }
      })
  })

  app.post('/channel/join', (req, res) => {
    Playlist
      .findOne({ channel: req.body.channel })
      .exec((err, docs) => {
        if (err) return next(err)

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
      duration: req.body.duration,
      scId: req.body.scId
    })

    Playlist
      .findOne({ channel: req.body.channel })
      .populate('songs')
      .exec((err, items) => {
        if (err) return next(err)

        items.songs.push(song._id)
        song.save()
        items.save()
      })

    res.status(200).send({ message: 'Song saved successfully.'})
  })

  app.delete('/song/:channel/:id', (req, res) => {
    Playlist
      .findOne({ channel: req.params.channel })
      .populate('songs')
      .exec((err, items) => {
        if (err) return next(err)

        let o = items.songs.pull(req.params.id)
        let id = o[0]._id

        items.songs.remove(id)
        items.save()

        Song.findByIdAndRemove(id,
          (err, song) => {
            if (err) return next(err)
          }
        )
      })

    res.send({ id: req.params.id, message: 'Song deleted sucessfully.' })
  })
}
