// Write your code here
import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {totalSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  increaseTimer = () => {
    this.setState(preState => ({
      totalSeconds: preState.totalSeconds + 1,
    }))
  }

  startTimer = () => {
    this.intervalId = setInterval(this.increaseTimer, 1000)
  }

  showTimerInFormat = () => {
    const {totalSeconds} = this.state
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({totalSeconds: 0})
  }

  render() {
    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="heading"> Stopwatch </h1>
          <div className="timer-container">
            <div className="image-para-container">
              <div className="small-timer-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="small-timer"
                />
              </div>
              <p className="timer-para"> Timer </p>
            </div>
            <p className="show-timer-para"> {this.showTimerInFormat()} </p>
            <div className="buttons-container">
              <button
                className="button start-button"
                type="button"
                onClick={this.startTimer}
              >
                {' '}
                Start{' '}
              </button>
              <button
                className="button stop-button"
                type="button"
                onClick={this.stopTimer}
              >
                {' '}
                Stop{' '}
              </button>
              <button
                className="button reset-button"
                type="button"
                onClick={this.resetTimer}
              >
                {' '}
                Reset{' '}
              </button>
            </div>
          </div>
        </div>
        <div className="big-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
            alt="timer"
            className="big-image"
          />
        </div>
      </div>
    )
  }
}

export default Stopwatch
