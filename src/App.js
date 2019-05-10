import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { isMenuVisible } from './components/NavBar/reducer';
import { closeMenu } from './components/NavBar/actions';
import NavBar from './components/NavBar';
import TimerComponent from './components/Timer'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.hideSidebar = this.hideSidebar.bind(this);
  }

  hideSidebar() {
    if (this.props.sideMenuVisible) {
      this.props.closeMenu();
    }
  }

  render() {
    return (
      <div style={{fontFamily: 'IRANSans'}} >
        <TimerComponent />
        {this.props.children}
      </div>
    );
  }
}

App.defaultProps = {
  children: null,
};

const mapStateToProps = state => ({
  sideMenuVisible: isMenuVisible(state.navbar),
});

export default withRouter(connect(null,{ closeMenu },)(App),);
