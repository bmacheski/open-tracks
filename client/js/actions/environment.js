export function toggleNav() {
  return dispatch => {
    dispatch({ type: 'TOGGLE_NAV' })
  }
}

export function isMobile() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  return dispatch => {
    dispatch({ type: 'UPDATE_ENVIRONMENT', mobile: isMobile })
  }
}
