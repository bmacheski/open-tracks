export function toggleNav() {
  return dispatch => {
    dispatch({ type: 'TOGGLE_NAV' })
  }
}
