const initialState = {
  isFetching: false,
  items: []
}

function song(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_SONGS':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_SONGS':
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.songs]
      })
    default:
      return state;
  }
}

export default function songs(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_SONGS':
      return Object.assign({}, state, {
        [action.query]: song(state[action.query], action)
      })
    case 'RECEIVE_SONGS':
      return Object.assign({}, state, {
        [action.query]: song(state[action.query], action)
      })
    case 'UPDATE_QUERY':
      return Object.assign({}, state, {
        query: action.query
      })
    default:
      return state
  }
}
