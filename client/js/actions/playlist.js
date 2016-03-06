import axios from 'axios'
import { browserHistory } from 'react-router'
import { socket } from '../io'

export function createChannel(channel) {
  return dispatch => {
    const channelObj = { channel: channel }
    dispatch({ type: 'SAVE_CHANNEL', channel: channel })
    return axios
      .post('/channel', channelObj)
      .then(res => {
          dispatch({ type: 'SAVE_CHANNEL_SUCCESS' })
          socket.emit('join channel', channelObj)
          browserHistory.push(`/home/${channel}`)
      })
      .catch(err => {
        dispatch({ type: 'SAVE_CHANNEL_FAILURE', error: err.data.message })
      })
  }
}

export function joinChannel(channel) {
  return dispatch => {
    const channelObj = { channel: channel }
    dispatch({ type: 'JOIN_CHANNEL', channel: channel })
    return axios
      .post('/channel/join', channelObj)
      .then(res => {
        dispatch(fetchPlaylistSongs())
        socket.emit('join channel', channelObj)
        browserHistory.push(`/home/${channel}`)
      })
      .catch(err => {
        dispatch({ type: 'JOIN_CHANNEL_FAILURE', error: err.data.message })
      })
  }
}

export function createSong(title, streamUrl, artworkUrl, duration) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    let song = {
      title: title,
      streamUrl: streamUrl,
      channel: channel,
      artworkUrl: artworkUrl,
      duration: duration
    }
    socket.emit('new song', song)
    dispatch({
      type: 'SAVE_SONG',
      channel: channel,
      song: song,
      artworkUrl: artworkUrl,
      duration: duration
    })
    return axios
      .post('/song', song)
      .then(res => dispatch({ type: 'UPDATE_PLAYLIST' }))
      .catch(err => { throw err })
  }
}

export function fetchPlaylistSongs(chan) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    const playlistChannel = channel || chan
    return axios
      .get(`/playlist/${playlistChannel}`)
      .then(res => {
        const song = res.data.items.map(s => {
          return {
            title: s.title,
            streamUrl: s.track,
            artworkUrl: s.artworkUrl,
            duration: s.duration
          }
        })
        dispatch({ type: 'RECEIVE_PLAYLIST_SONGS', songs: song, channel: playlistChannel })
      })
      .catch(err => { throw err })
  }
}

export function resetChannel() {
  return {
    type: 'RESET_CHANNEL'
  }
}

export function receiveNewSong(song, channel) {
  return {
    type: 'RECEIVE_NEW_SONG',
    song: song,
    channel: channel
  }
}
