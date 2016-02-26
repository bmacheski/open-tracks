export default function query(state = null, action) {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return action.query
    default:
      return state
  }
}
