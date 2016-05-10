import { socket } from '../io'

export function updateCurrentPlayerTime(time) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    const obj = { time: time, channel: channel }

    socket.emit('time update', obj)
    dispatch({ type: 'UPDATE_CURRENT_PLAYER_TIME', time: time })
  }
}

export function updateSongDuration(time) {
  return (dispatch, getState) => {
    const { channel } = getState().playlist
    const obj = { time: time }

    socket.emit('time update', obj)
    dispatch({ type: 'UPDATE_SONG_DURATION', time: time })
  }
}

export function receiveNewTime(time) {
  return dispatch => {
    dispatch({ type: 'UPDATE_CURRENT_PLAYER_TIME', time: time })
  }
}

export function updateCurrentPlaylistSong() {
  return (dispatch, getState) => {
    const { songIndex } = getState().player
    const newIndex = songIndex + 1

    dispatch({ type: 'UPDATE_CURRENT_PLAYLIST_SONG', songIndex: newIndex })
  }
}

export function setPlaying() {
  return {
    type: 'SET_IS_PLAYING'
  }
}

export function setNotPlaying() {
  return {
    type: 'SET_NOT_PLAYING'
  }
}
