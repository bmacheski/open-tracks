import React, { Component } from 'react'
import { PlayButton, Progress, Timer } from 'react-soundplayer/components'
import { updateCurrentPlayerTime, updateCurrentPlaylistSong, setPlaying, setNotPlaying } from '../actions/player'
import { socket } from '../io'
import { Cover } from 'react-soundplayer/components'

class PlayerControl extends Component {
  constructor(props) {
    super(props)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    this.handleNextPlaylistSong = this.handleNextPlaylistSong.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props

    socket.on('song playing', t =>{
      dispatch(setPlaying())
    })

    socket.on('song not playing', t => {
      dispatch(setNotPlaying())
    })
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

  handlePause() {
    const { dispatch, soundCloudAudio, channel } = this.props

    socket.emit('song paused:c', channel)
    dispatch(setNotPlaying())
    soundCloudAudio.pause()
  }

  handlePlay() {
    const { dispatch, soundCloudAudio, channel } = this.props

    socket.emit('song playing:c', channel)
    dispatch(setPlaying())
    soundCloudAudio.play()
  }

  togglePlay() {
    const { soundCloudAudio, isPlaying, playing, channel } = this.props

    playing ? this.handlePause() : this.handlePlay()
  }

  render() {
    const { song, hasJoined, soundCloudAudio, time, isPlaying, playing } = this.props
    const { duration } = song
    const d = duration / 1000

    if (!hasJoined) {
      soundCloudAudio.audio.autoplay = true
      soundCloudAudio.on('play', this.handlePlay)
      soundCloudAudio.on('timeupdate', this.handleTimeUpdate)
      soundCloudAudio.on('ended', this.handleNextPlaylistSong)

      return (
        <div
          className='controls-container'
          onClick={this.togglePlay.bind(this)}
          ref='playercontrol'>
          <PlayButton className='play-btn'
            playing={playing} />
          <h3 className='song-title'>{song.title}</h3>
          <Timer
            currentTime={time}
            duration={d} />
        </div>
      )
    } else {
      if (song) {
        return (
          <div className='controls-container'>
            <PlayButton className='play-btn'
              playing={isPlaying} />
            <h3 className='song-title'>{song.title}</h3>
            <Timer
              currentTime={time}
              duration={d} />
          </div>
        )
      } else {
        return (
          <div />
        )
      }
    }
  }
}

export default PlayerControl
