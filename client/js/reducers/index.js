import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import songs from './songs'

const rootReducer = combineReducers({
  routing,
  songs
})

export default rootReducer
