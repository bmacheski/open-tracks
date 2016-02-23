import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

const reduxRouterMiddleware = syncHistory(browserHistory)

const createFinalStore = compose(
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
    reduxRouterMiddleware
  )
)(createStore)

export default function configureStore(initialState) {
  const store = createFinalStore(rootReducer, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
