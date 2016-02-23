const initialState = {
  isFetching: false,
  items: []
}

function song(state = initialState, action) {
  switch(action.type) {
    case 'REQUEST_SONGS':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_SONGS':
      console.log(action)
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.songs],
        nextUrl: action.nextUrl
      })
    default:
      return state;
  }
}

export default function songs(state = {}, action) {
  switch(action.type) {
    case 'REQUEST_SONGS':
      return Object.assign({}, state, {
        [action.query]: song(state[action.query], action)
      })
    case 'RECEIVE_SONGS':
      return Object.assign({}, state, {
        [action.query]: song(state[action.query], action)
      })
    default:
      return state
  }
}
