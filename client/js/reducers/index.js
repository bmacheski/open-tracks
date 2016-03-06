import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import songs from './songs'
import playlist from './playlist'
import player from './player'
import environment from './environment'

const rootReducer = combineReducers({
  routing,
  songs,
  playlist,
  player,
  environment
})

export default rootReducer
