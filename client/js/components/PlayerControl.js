import React, { Component } from 'react'
import { PlayButton, Progress, Timer } from 'react-soundplayer/components'

class PlayerControl extends Component {
  togglePlay() {
    let { soundCloudAudio, playing } = this.props
    playing ? soundCloudAudio.pause() : soundCloudAudio.play()
  }

  render() {
    let { song, hasJoined } = this.props
    if (!hasJoined) {
      return (
        <div
          className='controls-container'
          onClick={this.togglePlay.bind(this)}>
          <PlayButton className='play-btn' {...this.props} />
          <h3>{song.title}</h3>
          <Timer {...this.props} />
          <Progress {...this.props} />
        </div>
      )
    } else {
      if (song && song.length > 0) {
        return (
          <div className='controls-container'>
            <h3>{song.title}</h3>
            <Timer {...this.props} />
            <Progress {...this.props} />
          </div>
        )
      } else {
        return (
          <div className='controls-container'>
            <Timer {...this.props} />
            <Progress {...this.props} />
          </div>
        )
      }
    }
  }
}

export default PlayerControl
