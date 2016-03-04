import React, { Component } from 'react'
import { PlayButton, Progress, Timer } from 'react-soundplayer/components'
import { updateCurrentPlayerTime } from '../actions/player'
import { socket } from '../io'

class PlayerControl extends Component {
  constructor(props) {
    super(props)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
  }

  handleTimeUpdate() {
    const { dispatch, time } = this.props
    const t = Math.floor(this.props.currentTime)

    if (t !== time) {
      dispatch(updateCurrentPlayerTime(t))
    }
  }

  togglePlay() {
    let { soundCloudAudio, playing } = this.props

    playing ? soundCloudAudio.pause() : soundCloudAudio.play()
  }

  render() {
    let { song, hasJoined, soundCloudAudio, time } = this.props

    if (!hasJoined) {
      soundCloudAudio.on('timeupdate', this.handleTimeUpdate)
      return (
        <div
          className='controls-container'
          onClick={this.togglePlay.bind(this)}
          ref='playercontrol'>
          <PlayButton className='play-btn' {...this.props} />
          <h3>{song.title}</h3>
          <Timer currentTime={time} />
          <Progress
            value={this.props.currentTime} />
        </div>
      )
    } else {
      if (song && song.length > 0) {
        return (
          <div className='controls-container'>
            <h3>{song.title}</h3>
            <Timer currentTime={time} />
            <Progress value={this.props.currentTime} />
          </div>
        )
      } else {
        return (
          <div className='controls-container'>
            <Timer currentTime={time} />
            <Progress value={this.props.currentTime} />
          </div>
        )
      }
    }
  }
}

export default PlayerControl
