import axios from 'axios'
import { browserHistory } from 'react-router'

export function createChannel(channel) {
  return dispatch => {
    dispatch({ type: 'SAVE_CHANNEL', channel: channel })
    return axios
      .post('/channel', { channel: channel })
      .then(res => {
          dispatch({ type: 'SAVE_CHANNEL_SUCCESS' })
          browserHistory.push(`/home/${channel}`)
      })
      .catch(err => console.log(err))
  }
}

export function createSong(title, streamUrl) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    let song = { title: title, streamUrl: streamUrl, channel: channel }
    dispatch({ type: 'SAVE_SONG', channel: channel, song: song })
    return axios
      .post('/song', song)
      .then(res => dispatch({ type: 'UPDATE_PLAYLIST' }))
      .catch(err => console.log(err))
  }
}

export function fetchPlaylistSongs() {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    return axios
      .get(`/playlist/${channel}`)
      .then(res => {
        dispatch({ type: 'RECEIVE_PLAYLIST_SONGS', songs: res.data.items })
      })
      .catch(err => console.log(err))
  }
}

