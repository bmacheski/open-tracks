import axios from 'axios'
import { browserHistory } from 'react-router'
import { socket } from '../io'

export function resetChannel() {
  return {
    type: 'RESET_CHANNEL'
  }
}

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

export function createSong(title, streamUrl, artworkUrl, duration, scId) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    const song = {
      title,
      streamUrl,
      channel,
      artworkUrl,
      duration,
      scId
    }

    socket.emit('new song', song)
    dispatch({
      type: 'SAVE_SONG',
      channel,
      song,
      artworkUrl,
      duration,
      scId
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

export function receiveNewSong(song, channel) {
  return {
    type: 'RECEIVE_NEW_SONG',
    song,
    channel
  }
}

export function removeSongFromPlaylist(channel, index) {
  return {
    type: 'REMOVE_SONG_FROM_PLAYLIST',
    channel,
    index
  }
}

export function deleteSong(id) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    const { items } = getState().playlist[channel]

    return axios
      .delete(`/song/${channel}/${id}`)
      .then(res => {
        let index = items.map((item) => item.scId.toString()).indexOf(res.data.id)

        dispatch(removeSongFromPlaylist(channel, index))
        socket.emit('song removed', { channel, index })
      })
      .catch(err => { console.log(err) })
  }
}
