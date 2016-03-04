import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import songs from './songs'
import playlist from './playlist'
import player from './player'
import navigator from './navigator'

const rootReducer = combineReducers({
  routing,
  songs,
  playlist,
  player,
  navigator
})

export default rootReducer
