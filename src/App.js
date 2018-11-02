import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import './App.css';
import { StyleRoot } from 'radium';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyleRoot>
          <Layout />
        </StyleRoot>   
      </div>
    );
  }
}

export default App;
