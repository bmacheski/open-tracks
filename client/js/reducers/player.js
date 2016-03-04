export default function player(state = { time: 0}, action) {
  switch (action.type) {
  case 'UPDATE_CURRENT_PLAYER_TIME':
    return {
      time: action.time
    }
  default:
    return state
  }
}
