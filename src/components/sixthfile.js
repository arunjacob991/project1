import React, { Component } from 'react';

export class Sixth extends Component{
  constructor(){
    super();
    this.state = {
      status: 10
    };
  }

  inCount(){
    this.setState({
      status: this.state.status + 7
    });
  }

  render(){
    return(
      <div>
        <p>Increase count:{this.state.status}</p>
        <button onClick = {this.inCount.bind(this)} >Click here</button>
      </div>
    );
  }
}
