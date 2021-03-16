import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Player } from "video-react";
import "./style.scss";
// import video from "./../../images/flutter_logo.mp4"

class Moghadame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "images/flutter_logo.mp4",
      animateClassNames: "fadein"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hash !== this.props.hash && nextProps.hash.includes("02")) {
      setTimeout(() => {
        this.player.play();
        this.setState({
          animateClassNames: this.state.animateClassNames + " animate"
        });
      }, 500);
    } else {
      this.setState({ animateClassNames: "fadein " });
    }
  }

  render() {
    return (
      <div
        className={this.state.animateClassNames}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%"
        }}
      >
        <div style={{ width: "50%", marginTop: "-40px" }}>
          <Player
            ref={c => {
              this.player = c;
            }}
            playsInline
            poster="images/f7f7f3.jpg"
          >
            <source src={this.state.source} type="video/mp4" />
          </Player>
        </div>
        <span style={{ position: "absolute", top: 10, right: 10 }}>
          <img src="images/logo.png" width="150" height="200" />
        </span>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <h4>گروه مهندسی کامپیوتر</h4>
          <h4>ارائه کننده : امیرحسین اسماعیلی</h4>
          <h4>موضوع : فِلاتر</h4>
          <h4>استاد راهنما : دکتر شريعت ناصري</h4>
          <h5>تاریخ : ۱۳۹۹/۱۲/۲۶</h5>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hash: state.router.location.hash
  };
}

export default connect(mapStateToProps)(withRouter(Moghadame));
