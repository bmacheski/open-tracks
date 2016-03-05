'use strict'

const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  title: String,
  track: String,
  artworkUrl: String
})

module.exports = mongoose.model('Song', SongSchema)
