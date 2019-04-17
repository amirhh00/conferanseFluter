import React, { Component } from 'react';
import { withRouter } from 'react-router'
import _ from 'lodash';
import { connect } from 'react-redux';
// import { Button as Btn } from 'react-toolbox/lib/button';
// import AppBar from 'react-toolbox/lib/app_bar';
// import Navigation from 'react-toolbox/lib/navigation';

import { deviceSize, changeNavLinkColor } from './actions';
import './NavBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      isOpen: false,
      width: 0,
      height: 0,
      navLinkColor: '#ffffff'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nav_link_color.color !== this.state.navLinkColor) {
      this.setState({ navLinkColor: nextProps.nav_link_color.color });
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight }, () => {
      this.props.deviceSize(this.state.width, this.state.height);
    });
  }


  handleClick(value) {
    this.props.history.push({
      pathname: `/${value}`,
    })
  }

  render() {
    const { searchVisible } = this.props;
    return (
      <div style={{ display: 'none' }} >
        {/* <AppBar>
          <Navigation type='horizontal' className="navbar-nav" >
            <Btn label='سفارشات' flat style={{ color: this.state.navLinkColor }} className="navlink" onClick={this.handleClick.bind(this, '')} />
            <Btn label='مهره ها' flat style={{ color: this.state.navLinkColor }} className="navlink" onClick={this.handleClick.bind(this, 'beads')} />
            <Btn label='متریال ها' flat style={{ color: this.state.navLinkColor }} className="navlink" onClick={this.handleClick.bind(this, 'materials')} />
            <Btn label='سایز ها' flat style={{ color: this.state.navLinkColor }} className="navlink" onClick={this.handleClick.bind(this, 'sizes')} />
            <Btn label='آپدیت' flat style={{ color: this.state.navLinkColor }} className="navlink" onClick={this.handleClick.bind(this, 'update')} />
          </Navigation>
        </AppBar> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  size: state.navbar.resize,
  nav_link_color: state.navbar.navLinkColor,
});

export default connect(mapStateToProps, { deviceSize, changeNavLinkColor })(withRouter(NavBar));
