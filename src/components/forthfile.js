import React, { Component } from 'react';
import { Fifth } from './fifthfile.js';

export class Forth extends Component{
constructor(props){
  super();
  this.state = {
    height: props.initialHeight,
    status: 0
  };
}

stat(){
setTimeout(() => {
  this.setState({
    status: 1
  });
},3000);
}

increaseHeight(){
  this.setState({
    height: this.state.height + 5
  });
}

  render(){
    return(
      <div>
        <p>Height: {this.state.height}</p>
        <p>Status: {this.state.status}{this.stat()}</p>
        <button onClick = {this.increaseHeight.bind(this)} > {`Height increase`}</button>
        <Fifth />
      </div>
    );
  }
}
