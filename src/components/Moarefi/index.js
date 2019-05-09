import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Player } from 'video-react';

class Moarefi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: "images/Introducing.webm",
      poster : "images/flutter_logo.png",
      animateClassNames : "fadein"
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hash !== this.props.hash && nextProps.hash.includes("Moarefi")) {
      setTimeout(() => {
        this.player.playbackRate = 0.75;
        this.player.play();
      }, 7000);
    }else{
      this.player.load();
    }
  }

  render() {
    return (
      <Player
        ref={c => {
          this.player = c;
        }}
        playsInline
        poster={this.state.poster}
      >
        <source src={this.state.source} type="video/mp4" />
      </Player>
    );
  }
}

function mapStateToProps(state) {
  return {
    hash: state.router.location.hash,
  }
}

export default connect(mapStateToProps)(withRouter(Moarefi));
