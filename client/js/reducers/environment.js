const initialState = {
  open: false,
  mobile: false
}

export default function environment(state = initialState, action) {
  switch (action.type) {
  case 'UPDATE_ENVIRONMENT':
    return Object.assign({}, state, {
      mobile: action.mobile
    })

  case 'TOGGLE_NAV':
    return Object.assign({}, state, {
      open: !state.open
    })

  default:
    return state
  }
}
