'use strict'

const mongoose = require('mongoose')

const PlaylistSchema = new mongoose.Schema({
  channel: String
  // songs: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Song'
  // }]
})

module.exports = mongoose.model('Playlist', PlaylistSchema)
