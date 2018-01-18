import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';
import './App.css';

class App extends Component {
  render () {
    return (
      <HashRouter hashType="noslash">
        <div className="App">
          <Blog />
        </div>
      </HashRouter>
    );
  }
}

export default App;
