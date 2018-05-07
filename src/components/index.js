import React from 'react';
import { render } from 'react-dom';

import { Home } from './home';

class App extends React.Component{
  render(){
    return(
      <div>
      <div>Hello Man...</div>
      <p>skmlskdgdmkmgkdg mvfdklv</p>
      <button type="button">Click Me Man</button><br/><br/>
      <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
