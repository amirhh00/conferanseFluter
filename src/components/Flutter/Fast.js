import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Player } from 'video-react';

class Fast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: "images/fast2.mp4",
      animateClassNames : "fadein"
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hash !== this.props.hash && nextProps.hash.includes("fast")) {
      setTimeout(() => {
        this.player.play();
        this.setState({animateClassNames : this.state.animateClassNames + " animate"})
      }, 10);
    }else{
      this.setState({animateClassNames : "fadein "})
    }
  }

  render() {
    return (
      <div className={this.state.animateClassNames} style={{display:'flex',flexDirection:'column',alignItems:'center',height:'100%'}} >
        {/* <div style={{width:'50%',marginTop:'-40px'}}>
          <Player ref={c => { this.player = c }}
            playsInline
            poster="images/f7f7f3.jpg"
            >
            <source src={this.state.source} type="video/mp4" />
          </Player>
        </div>
        <span style={{position:'absolute',top : 0 , right : 0}} ><img src="images/logo.png" /></span> */}
        <div style={{textAlign:'right',marginTop:20}} >
          <h4>فلاتر سریعه</h4>
        </div><br />
        <div style={{display:'flex', width: '95%',alignItems:'center'}} >
          {/* <img style={{width : '50%' , height:'50%'}} src="images/flare_teddy.gif" /> */}
          <Player ref={c => { this.player = c }}
            playsInline
            loop
            poster="images/f7f7f3.jpg"
            >
            <source src={this.state.source} type="video/mp4" />
          </Player>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    hash: state.router.location.hash,
  }
}

export default connect(mapStateToProps)(withRouter(Fast));
