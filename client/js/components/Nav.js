import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Open Tracks</Link>
        </nav>
      </div>
    )
  }
}
export default Nav
