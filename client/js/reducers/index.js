import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import songs from './songs'
import query from './query'
import playlist from './playlist'

const rootReducer = combineReducers({
  routing,
  songs,
  query,
  playlist
})

export default rootReducer
