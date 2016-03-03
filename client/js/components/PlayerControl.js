import React, { Component } from 'react'
import { PlayButton, Progress, Timer } from 'react-soundplayer/components'

class PlayerControl extends Component {
  togglePlay() {
    let { soundCloudAudio, playing } = this.props
    playing ? soundCloudAudio.pause() : soundCloudAudio.play()
  }

  render() {
    let { song } = this.props
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
  }
}

export default PlayerControl
