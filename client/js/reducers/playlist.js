export default function playlist(state = {}, action) {
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
    default:
      return state
  }
}
