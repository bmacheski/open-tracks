const initialState = {
  time: 0,
  songIndex: 0,
  isPlaying: false
}

export default function player(state = initialState, action) {
  switch (action.type) {
  case 'UPDATE_CURRENT_PLAYER_TIME':
    if (state.isPlaying) {
      return Object.assign({}, state, {
        time: action.time,
        isPlaying: true
      })
    }
    else {
      return Object.assign({}, state, {
        time: action.time,
        isPlaying: false
      })
   }
  case 'UPDATE_CURRENT_PLAYLIST_SONG':
    return Object.assign({}, state, {
      songIndex: action.songIndex
    })
  case 'SET_IS_PLAYING':
    return Object.assign({}, state, {
      isPlaying: true
    })
  case 'SET_NOT_PLAYING':
    return Object.assign({}, state, {
      isPlaying: false
    })
  default:
    return state
  }
}

