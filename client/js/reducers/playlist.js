const initialState = {
  items: []
}

function playlist(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_SONG':
      return Object.assign({}, state, {
        items: [...state.items, action.song]
      })
    case 'RECEIVE_PLAYLIST_SONGS':
      return Object.assign({}, state, {
        items: [...state.items, ...action.songs]
      })
    default:
      return state;
  }
}

export default function playlists(state = {}, action) {
  switch (action.type) {
    case 'SAVE_CHANNEL':
      return Object.assign({}, state, {
        saveChannelPending: true,
        saveChannelSucceeded: null,
        saveChannelFailure: null,
        channel: action.channel
      })
    case 'SAVE_CHANNEL_SUCCESS':
      return Object.assign({}, state, {
        saveChannelPending: false,
        saveChannelSucceeded: true,
        saveChannelFailure: false
      })
    case 'SAVE_CHANNEL_FAILURE':
      return Object.assign({}, state, {
        saveChannelPending: false,
        saveChannelSucceeded: false,
        saveChannelFailure: true
      })
    case 'SAVE_SONG':
    case 'RECEIVE_PLAYLIST_SONGS':
    case 'RECEIVE_NEW_SONG':
      return Object.assign({}, state, {
        [action.channel]: playlist(state[action.channel], action)
      })
    case 'JOIN_CHANNEL':
      return Object.assign({}, state, {
        channel: action.channel
      })
    default:
      return state
  }
}
