import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './containers/App'
import LandingContainer from './containers/LandingContainer'
import HomeContainer from './containers/HomeContainer'
import configure from './store'
import SearchContainer from './containers/SearchContainer'
import PlayListContainer from './containers/PlaylistContainer'

import io from 'socket.io-client'
export const socket = io('http://localhost:3000')

const store = configure()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingContainer} />
        <Route path='/home/:channel' component={HomeContainer}>
          <IndexRoute component={SearchContainer} />
          <Route path='/home/:channel/playlist' component={PlayListContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
)
