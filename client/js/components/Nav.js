import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/lib/app-bar'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { toggleNav } from '../actions/navigator'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class Nav extends Component {
  toggleNav() {
    console.log('hello')
    const { dispatch } = this.props
    dispatch(toggleNav())
  }

  render() {
    const { dispatch } = this.props
    let title = "Open Tracks"
    return (
      <div>
        <AppBar
          title={title}
          onLeftIconButtonTouchTap={this.toggleNav.bind(this)} >
        </AppBar>
      </div>
    )
  }
}
export default Nav
