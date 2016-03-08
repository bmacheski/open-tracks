import React, { Component } from 'react'
import { PlayButton, Progress, Timer } from 'react-soundplayer/components'
import { updateCurrentPlayerTime, updateCurrentPlaylistSong } from '../actions/player'
import { socket } from '../io'
import { Cover } from 'react-soundplayer/components'

class PlayerControl extends Component {
  constructor(props) {
    super(props)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    this.handleNextPlaylistSong = this.handleNextPlaylistSong.bind(this)
  }

  handleTimeUpdate() {
    const { dispatch, time } = this.props
    const t = Math.floor(this.props.currentTime)

    if (t !== time) {
      dispatch(updateCurrentPlayerTime(t))
    }
  }

  handleNextPlaylistSong() {
    const { dispatch, channel } = this.props

    socket.emit('next song index', channel)
    dispatch(updateCurrentPlaylistSong())
  }

  togglePlay() {
    const { soundCloudAudio, playing, channel } = this.props

    playing ? soundCloudAudio.pause() : soundCloudAudio.play()
  }

  render() {
    const { song, hasJoined, soundCloudAudio, time } = this.props
    const { duration } = song
    const d = duration / 1000

    if (!hasJoined) {
      soundCloudAudio.audio.autoplay = true
      soundCloudAudio.on('timeupdate', this.handleTimeUpdate)
      soundCloudAudio.on('ended', this.handleNextPlaylistSong)

      return (
        <div
          className='controls-container'
          onClick={this.togglePlay.bind(this)}
          ref='playercontrol'>
          <PlayButton className='play-btn' {...this.props} />
          <h3 className='song-title'>{song.title}</h3>
          <Timer
            currentTime={time}
            duration={d} />
        </div>
      )
    } else {
      if (song && song.length > 0) {
        return (
          <div className='controls-container'>
            <h3 className='song-title'>{song.title}</h3>
            <Timer
              currentTime={time}
              duration={d} />
          </div>
        )
      } else {
        return (
          <div className='controls-container'>
            <Timer
              currentTime={time}
              duration={d} />
          </div>
        )
      }
    }
  }
}

export default PlayerControl
