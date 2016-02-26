'use strict'

const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('Song', SongSchema)
