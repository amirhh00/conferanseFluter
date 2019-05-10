import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timer from 'react-compound-timer';
import { FaPlay , FaRegPauseCircle , FaSyncAlt } from 'react-icons/fa';

class TimerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'green'
    }
  }
  render() {
    return (
      <div id="timer" >
        <Timer
          initialTime={0}
          startImmediately={false}

          checkpoints={[
            {
                time: 1*5*60*1000,
                callback: () => this.setState({color : '#d7661f'}),
            },
            {
                time: 1*2*60*1000 - 5000,
                callback: () => this.setState({color : '#da0e0e'}),
            }
        ]}
        >
          {({ start, resume, pause, stop, reset, timerState }) => (
            <React.Fragment>
              <div style={{ position: 'fixed', top: 10, left: 10 , color : this.state.color , fontFamily: 'B nazanin' , fontSize : 'larger' , fontWeight:'bolder' }} >
                <Timer.Hours /> <p style={{ display: 'inline' }} > : </p>
                <Timer.Minutes /><sup style={{ display: 'inline' }} >' </sup> : &nbsp;
                <Timer.Seconds /><sup style={{ display: 'inline' }} >" </sup>
              </div>
              <div style={{ position: 'fixed', bottom: 10, left: 10,zIndex:9999 }} >
                <button onClick={start}><FaPlay /></button>
                <button onClick={pause}><FaRegPauseCircle /></button>
                {/* <button onClick={resume}>Resume</button> */}
                {/* <button onClick={stop}>Stop</button> */}
                <button onClick={reset}><FaSyncAlt /></button>
              </div>
            </React.Fragment>
          )}
        </Timer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(null, null)(TimerComponent)
