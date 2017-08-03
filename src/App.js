import React, { Component } from 'react';
import logo from './logo.svg';

import { Button } from 'reactstrap'
import Icon from 'react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="container">
        { /* Replace the contents of .container with your app code: */ }

        <div className='jumbotron'>
          <h1> LGC Boulder App Template </h1>

          <ul className='text-info'>
            <li>bootstrap is available via reactstrap</li>
            <li>font-awesome is available via react-fontawesome</li>
          </ul>

          <Button>
            <Icon name='eye' />
            This is a reactstrap button
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
