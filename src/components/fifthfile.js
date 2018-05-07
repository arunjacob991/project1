import React, { Component } from 'react';
import { Sixth } from './sixthfile.js';

export class Fifth extends Component{

  constructor(){
    super();
    this.state = {
      name: "jacob"
    };
    console.log("constructor");
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps, 'componentWillReceiveProps');
  }

   shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render(){
    console.log('RENDER');
    return(
      <div>
        <p>Lets learn Lifecycle Components</p>
        {this.state.name}
        <div>
          {this.props.status}
        </div>
        <Sixth/>
      </div>
    );
  }
}
