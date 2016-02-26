export default function playlist(state = {}, action) {
  switch (action.type) {
    case 'SAVE':
      return Object.assign({}, state, {
        savePending: true,
        saveSucceeded: null,
        saveFailure: null
      })
    case 'SAVE_SUCCESS':
      return Object.assign({}, state, {
        savePending: false,
        saveSucceeded: true,
        saveFailure: false
      })
    case 'SAVE_FAILURE':
      return Object.assign({}, state, {
        savePending: false,
        saveSucceeded: false,
        saveFailure: true
      })
    default:
      return state
  }
}
