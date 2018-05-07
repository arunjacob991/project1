import React from 'react';
import { Second } from './secondfile';


export class Home extends React.Component{
  render(){
    let user = {
      name: "broi",
      height: 30,
      sex: "m"
    };
    return(
      <div>
      <div>Next Component.....</div>
      <br /><br />
      <Second name={"jacs"} age={'28'} obj= {user}>
        <p>This is a child</p>
      </Second>
      </div>
    );
  }
}
