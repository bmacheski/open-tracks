const axios = require('axios')
import { browserHistory } from 'react-router'

function saveSuccess() {
  return {
    type: 'SAVE_SUCCESS'
  }
}

function saveFailure() {
  return {
    type: 'SAVE_FAILURE'
  }
}

export default function createChannel(channel) {
  return dispatch => {
    dispatch({ type: 'SAVE' })
    return axios
      .post('/channel', { channel: channel })
      .then(res => {
          dispatch(saveSuccess())
          browserHistory.push(`/home/${channel}`)
      })
      .catch(err => dispatch(saveFailure()))
  }
}
