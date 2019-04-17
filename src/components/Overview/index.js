import React, { PureComponent } from 'react'

export default class Overview extends PureComponent {
  constructor(props){
    super(props)

  }

  componentWillReceiveProps(nextProps) {
    
  }
  
  
  render() {
    return (
      <div>
        {/* <video autoPlay style={{width:'100%',height:'100%'}} src="images/flutter_logo.mp4" type="video/mp4"></video> */}
        <q style={{color : 'black'}} >Aren’t you just <b>bored</b> with all those slides-based presentations?</q>
      </div>
    )
  }
}
