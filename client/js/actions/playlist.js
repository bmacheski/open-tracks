import axios from 'axios'
import { browserHistory } from 'react-router'

export function createChannel(channel) {
  return dispatch => {
    dispatch({ type: 'SAVE_CHANNEL' })
    return axios
      .post('/channel', { channel: channel })
      .then(res => {
          dispatch({ type: 'SAVE_CHANNEL_SUCCESS' })
          browserHistory.push(`/home/${channel}`)
      })
      .catch(err => dispatch({ type: 'SAVE_CHANNEL_FAILURE' }))
  }
}

export function createSong(title, streamUrl) {
  return dispatch => {
    dispatch({ type: 'SAVE_SONG' })
    return axios
      .post('/song', { title: title, streamUrl: streamUrl })
      .then(res => {
          dispatch({ type: 'UPDATE_PLAYLIST' })
      })
      .catch(err => console.log(err))
  }
}
