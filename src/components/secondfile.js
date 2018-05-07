import React, { Component } from 'react';
import { Third } from './thirdfile.js';

export const Second = (props) => {
  let onGreet = function() {
    alert("Helloooooiiii");
  }
    return(
      <div>
        <p>qaaa</p>
        <p>Your name is {props.name} and your height is {props.obj.height}</p>
        <br/><br/>
        <Third greet = {onGreet} />
      </div>
    );
}
