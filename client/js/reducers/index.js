import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import songs from './songs'
import query from './query'

const rootReducer = combineReducers({
  routing,
  songs,
  query
})

export default rootReducer
