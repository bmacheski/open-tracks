const initialState = {
  time: 0,
  songIndex: 0
}

export default function player(state = initialState, action) {
  switch (action.type) {
  case 'UPDATE_CURRENT_PLAYER_TIME':
    return Object.assign({}, state, {
      time: action.time
    })
  case 'UPDATE_CURRENT_PLAYLIST_SONG':
    return Object.assign({}, state, {
      songIndex: action.songIndex
    })
  default:
    return state
  }
}

