import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import fetchSongs from '../actions/songs'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e) {
    e.preventDefault()

    const { dispatch } = this.props
    let query = this.refs.searchInput.value
    if (e.keyCode === 13) {
      console.log(query)
      dispatch(fetchSongs(query))
    }
  }

  render() {
    let input = (
      <div className="input-field">
        <input
          ref="searchInput"
          type="text"
          onKeyUp={this.handleKeyUp} />
        <label>
          <i className="material-icons">search</i>
        </label>
      </div>
    )
    return (
      <nav>
        {input}
      </nav>
    )
  }
}
export default Nav
