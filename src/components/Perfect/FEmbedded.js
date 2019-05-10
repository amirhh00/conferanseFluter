import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Player } from 'video-react';

class Fembedded extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: "images/embedded.mp4",
      animateClassNames : "fadein"
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hash !== this.props.hash && nextProps.hash.includes("fembedded")) {
      setTimeout(() => {
        this.setState({animateClassNames : this.state.animateClassNames + " animate"})
      }, 100);
      setTimeout(() => {
        this.player.play();
      }, 4000);
    }else{
      this.setState({animateClassNames : "fadein "});
      this.player.load();
    }
  }

  render() {
    return (
      <div className={this.state.animateClassNames} style={{display:'flex',flexDirection:'column',alignItems:'center',height:'100%',direction:'rtl'}} >
        <h4>فلاتر در embedded</h4><br />
         <div style={{width:'100%'}}>
          <Player ref={c => { this.player = c }}
            playsInline
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

export default connect(mapStateToProps)(withRouter(Fembedded));
