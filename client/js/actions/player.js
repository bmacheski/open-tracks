import { socket } from '../io'

export function updateCurrentPlayerTime(time) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    const obj = { time: time, channel: channel }
    socket.emit('time update', obj)
    dispatch({ type: 'UPDATE_CURRENT_PLAYER_TIME', time: time })
  }
}

export function receiveNewTime(time) {
  return dispatch => {
    dispatch({ type: 'UPDATE_CURRENT_PLAYER_TIME', time: time })
  }
}
