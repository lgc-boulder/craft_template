import React, { Component } from 'react';
import logo from './logo.svg';

import { Button } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="container">
        { /* Replace the contents of .container with your app code: */ }

        <div className='jumbotron'>
          <h1> LGC Boulder App Template </h1>

          <ul>
            bootstrap is available via reactstrap
          </ul>

          <Button>
            This is a reactstrap button
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
