import React, {Component} from 'react'
import Timer from './timer'
import Controls from './controls'
import moment from 'moment'

class Countdown extends Component {

  state = {
    duration: this.getRemainingTime(),
    pause: false
  }

  componentDidMount(){
    this.resume()
  }

  componentWillUnmount(){
    this.pause()
  }

  getRemainingTime() {
    let now = moment(),
        nextYear = moment({year: now.year() + 1}),
        diff = nextYear.diff(now)

    return moment.duration(diff)
  }

  handlePauseToggle = () => {
    this.setState((prevState, props) => {
      const paused = !prevState.pause

      if(paused){
        this.pause()
      }else{
        this.resume()
      }

      return {
        pause: paused
      }
    })
  }

  pause() {
    clearInterval(this.interval)
  }

  resume() {
    this.interval = setInterval(
      () => this.setState({
        duration: this.getRemainingTime()
      }), 1000
    )
  }

  render() {

    const {duration, pause} = this.state 

    return (
      <section className="hero is-dark is-bold is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Countdown
            </h1>
            <h2 className="subtitle">
              Not much time left...
            </h2>
            <section className="section">
              <Timer duration={duration}></Timer>
            </section>
            <Controls pause={pause} onPauseToggle={this.handlePauseToggle}></Controls>
          </div>
        </div>
      </section>
    )
  }
}

export default Countdown