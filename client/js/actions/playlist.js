import axios from 'axios'
import { browserHistory } from 'react-router'
import { socket } from '../io'

export function createChannel(channel) {
  return dispatch => {
    const channelObj = { channel: channel }
    socket.emit('join channel', channelObj)
    dispatch({ type: 'SAVE_CHANNEL', channel: channel })
    return axios
      .post('/channel', channelObj)
      .then(res => {
          dispatch({ type: 'SAVE_CHANNEL_SUCCESS' })
          browserHistory.push(`/home/${channel}`)
      })
      .catch(err => { throw err })
  }
}

export function joinChannel(channel) {
  return dispatch => {
    const channelObj = { channel: channel }
    socket.emit('join channel', channelObj)
    dispatch({ type: 'JOIN_CHANNEL', channel: channel })
    browserHistory.push(`/home/${channel}`)
  }
}

export function createSong(title, streamUrl) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    let song = { title: title, streamUrl: streamUrl, channel: channel }
    socket.emit('song added', song)
    dispatch({ type: 'SAVE_SONG', channel: channel, song: song })
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
        let song = res.data.items.map((s) => { return { title: s.title, streamUrl: s.track }})
        dispatch({ type: 'RECEIVE_PLAYLIST_SONGS', songs: song, channel: playlistChannel })
      })
      .catch(err => { throw err })
  }
}

