import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './containers/App'
import configure from './store'

// import io from 'socket.io-client';
// export const socket = io('http://localhost:3000');

const store = configure()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
)
