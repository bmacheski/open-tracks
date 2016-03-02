import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import songs from './songs'
import playlist from './playlist'
import navigator from './navigator'

const rootReducer = combineReducers({
  routing,
  songs,
  playlist,
  navigator
})

export default rootReducer
