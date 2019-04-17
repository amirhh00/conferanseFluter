import React, { Component } from 'react'
import './style.scss';
// import {Tab, Tabs} from 'react-toolbox';

export default class NoMatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 1,
      fixedIndex: 1,
      inverseIndex: 1
    }
  }
  handleTabChange = (index) => {
    this.setState({index});
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index});
  };

  handleActive = () => {
    console.log('Special one activated');
  };
  render() {
      return (
      <div className="over404">
        <div className="darkOverlay" />
        <header style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1 className="glitch" data-text={404}>404</h1>
          {/* <p className="glitch" data-text={'صفحه مورد نظر پیدا نشد'} style={{textShadow: '7px 6px 7px rgba(191,191,191,0.6)',fontSize:'1.3em',marginTop:-15,fontWeight:'bold',color:'white',direction:'ltr'}} >! صفحه مورد نظر پیدا نشد</p> */}
        </header>
      </div>
    );
  }
}
