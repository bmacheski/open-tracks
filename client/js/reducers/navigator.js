const initialState = {
  open: false
}

export default function navigator(state = initialState, action) {
  switch (action.type) {
  case 'TOGGLE_NAV':
    return {
      open: !state.open
    }
  default:
    return state
  }
}
