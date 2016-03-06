'use strict'

const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  title: String,
  track: String,
  artworkUrl: String,
  duration: Number
})

module.exports = mongoose.model('Song', SongSchema)
