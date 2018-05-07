import React, { Component } from 'react';
import { Forth } from './forthfile.js';

export const Third = (props) => {
    return(
      <div>
        <p>Hoooyyyaaaaaaa</p>
        <button onClick={props.greet}>Greet</button><br/><br/>
        <Forth initialHeight = { 50 } />
      </div>
    );
}
